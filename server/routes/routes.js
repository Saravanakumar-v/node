const requestHandler = require('../handler/requestHandler')

function routes(req, res) {
    reqURL = req.url;

    requestHandler(reqURL,req, res)
}

module.exports = routes