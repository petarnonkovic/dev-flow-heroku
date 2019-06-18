const express = require('express')
const path = require('path')

const app = express()

// App config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
    express.static(path.resolve(__dirname, '../public'), {
        index: false
    })
)

app.get('/api', (req, res, next) => {
    // res.set('Cache-Control', 'public, max-age=31557600')
    res.json({ data: ['one', 'two', 'three'] })
})

app.get('*', (req, res, next) => {
    const options = {
        root: path.resolve(__dirname, '../public'),
        dotfiles: 'ignore',
        headers: {
            'x-timestamp': Date.now()
        }
    }
    const fileName = 'index.html'
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log('Error', err)
            return next(err)
        } else {
            console.log('Response Sent!')
        }
    })
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const msg = err.msg || 'Service Unavailable'
    const error = { status, msg }
    res.json({ error })
})

module.exports = app
