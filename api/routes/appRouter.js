const path = require('path')

function appRouter() {
    return function(req, res, next) {
        const options = {
            root: path.resolve(__dirname, '../../public'),
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
    }
}

module.exports = appRouter
