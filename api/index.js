const express = require('express')
const path = require('path')

const apiRouter = require('./routes/apiRouter')
const appRouter = require('./routes/appRouter')

const app = express()

// App config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', apiRouter)

app.use(express.static(path.resolve(__dirname, '../public')))
app.use('*', appRouter())

app.use((err, req, res, next) => {
    const status = err.status || 500
    const msg = err.msg || 'Service Unavailable'
    const error = { status, msg }
    res.json({ error, stack: err })
})

module.exports = app
