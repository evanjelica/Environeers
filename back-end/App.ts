// import {Environeer} from './Environeer'
// import Environeer = module("Environeer");
require('typescript-require');

var restify = require('restify');
var Environeer = require('./Environeer');

function getAllTasks(req, res, next) {

    res.json(200, {result:  env.getTasks()});
    return next();

}

function addPoints(req, res, next) {
    try {
        console.log(req.params.numTasks)
        let num = env.addPoints(req.params.numTasks);

        res.json(200, {result: num});
        return next();
    } catch (e) {
            res.json(400, {error: e});
            return next();
    }
}
function signup(req, res, next) {
    try {
        let results = env.signUp(req.params.username, req.params.password)
        res.json(200, {result: results});
        return next()
    }catch (e) {
        res.json(400, {error: e})
        return next();
    }

}

function removePoints(req, res, next) {
    try {
        let points = env.removePoints(req.params.numTasks);
        res.json(200, {result: points});
        return next();
    }catch (e) {
        res.json(400, {error: e});
        return next();
    }
}

function login(req, res, next) {
    try {
        let user = req.params.username;
        let pass  = req.params.password;
        let resp = env.login(user, pass);
        res.json(200, {result: resp});
        return next();

    } catch (e) {
        res.json(400, {error: e});
        return next();
    }

}
function getpoints(req, res, next) {
try {
    res.json(200, {result: env.getPoints()});
}catch (e) {
        res.json(400, {error: e});
        return next();
}
}
function addtask(req, res, next) {
res.json(200, env.addTask(req.body));
return next();
}

var server = restify.createServer();
var env = new Environeer.Environeer(3);

server.get('/tasks', getAllTasks); // returns an array

server.put("/user/:numTasks", addPoints); //info in url returns status 200 for success and 400 for fail

server.del("/user/:numTasks", removePoints); //info in url returns status 200 for success and 400 for fail

server.post("/newUser/:username/:password", signup); // info in body, returns status 200 for success and 400 for fail

server.post("existingUser/:username/:password", login); // info in body returns status 200 for success and 400 for fail

server.get("/points", getpoints)  //returns number of points

server.post("/tasks", addtask) // info in body




server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
// export class App {
//         initServer(port) {
//         console.log("App::initServer( " + port + " ) - start");
//
//         const server = new Server(port);
//         server.start().then(function (val) {
//             console.log("App::initServer() - started: " + val);
//         }).catch(function (err: Error) {
//             Log.error("App::initServer() - ERROR: " + err.message);
//         });
//     }
// }