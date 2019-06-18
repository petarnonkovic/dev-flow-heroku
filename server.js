const http = require('http')
const app = require('./api')

// set app port
const PORT = normalizePort(process.env.PORT || 5000)
app.set('port', PORT)

// create server
const server = http.createServer(app)

// set listeners
server.on('error', onError)
server.on('listening', onListening)

// start listening to requests
server.listen(PORT)

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    let port = parseInt(val, 10)

    if (isNaN(port)) {
        // named pipe
        return val
    }

    if (port >= 0) {
        // port number
        return port
    }

    return false
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }

    let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = this.address()
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
    console.log('Listening on ' + bind)
}
