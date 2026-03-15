const http = require('http');
const routes = require('./routes/routes')

const port = 8888;

const server = http.createServer(routes);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});