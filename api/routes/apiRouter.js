const express = require('express')
const router = express.Router()

router.get('/test-route', (req, res, next) => {
    if (!req.xhr) {
        return res.redirect('/')
    }
    // res.set('Cache-Control', 'public, max-age=31557600')
    return res.json({ data: ['one', 'two', 'three'] })
})

module.exports = router
