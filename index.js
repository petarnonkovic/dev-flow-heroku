const http = require('http')

const host = '127.0.0.1'
const PORT = process.env.PORT || 3300

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello from Node Server')
})

server.listen(PORT, host, () => {
    console.log(`Server running at: http://${host}:${PORT}/`)
})
