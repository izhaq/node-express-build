"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appInstance = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const app_routes_1 = require("./routes/app.routes");
class App {
    constructor() {
        this.routes = new app_routes_1.AppRoutes();
        this.mongoUrl = 'mongodb+srv://izhaq:11072017@realmcluster.b9wxi.mongodb.net/Users?retryWrites=true&w=majority';
        this.appConfig = express();
        this.config();
        this.routes.routes(this.appConfig);
        //this.mongoSetup().catch(console.error);
    }
    config() {
        this.appConfig.use(bodyParser.json());
        this.appConfig.use(bodyParser.urlencoded({ extended: false }));
        this.appConfig.use(express.static('public'));
        // Add headers
        this.appConfig.use(function (req, res, next) {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            // Pass to next layer of middleware
            next();
        });
        this.appConfig.options('*', function (req, res) { res.sendStatus(200); });
    }
    getAppConfigs() {
        return this.appConfig;
    }
}
exports.appInstance = new App();
//# sourceMappingURL=app.js.map