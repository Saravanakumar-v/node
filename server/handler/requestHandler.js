const CrudDB = require('../CRUD/crudDB')
const url = require('url')


async function requestHandler(route, req, res) {
    let dbOperation = new CrudDB();

    function returnInvalidRequestorError(err_message) {
        res.writeHead(300, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ res: err_message }))
        return;
    }

    if(route == '/add-document') {

        const parseURL = url.parse(req.url, true)
        usr_name = parseURL.query.usr_name
        mail = parseURL.query.mail
        ph = parseURL.query.ph

        if(!usr_name || !mail || !ph) {
            returnInvalidRequestorError('Invalid Request')
        }
        
        let user_obj = {
            usr_name: usr_name,
            mail: mail,
            ph: ph
        }

        if(await dbOperation.writeDB(user_obj)) {
            console.log('DB Write',user_obj)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ res: 'DB Write successfull!' }));
            return;
        } else {
            returnInvalidRequestorError('DB Write Error!')
        }
    }   

    if(route == '/users') {
        let users = await dbOperation.readDB()

        if(users.length > 0) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({res: users}))
            return;
        } else {
            returnInvalidRequestorError('No Content!')
        }
    }

    if(route == '/update-document') {
        
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ res: '404 Not Found!' }));
}

module.exports = requestHandler;
