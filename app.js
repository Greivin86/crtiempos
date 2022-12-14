import express from "express";
import methodOverride from "method-override";
import { MONGODB_URI } from "./databases/dbconfig.js";
import bodyParser from "body-parser";
import MongoStore from "connect-mongo";
import session from 'express-session';
import router from './routes/index.js';
//init
const app = express();

//settings
app.set("port", process.env.PORT || 3000);


//middlewares
app.use(methodOverride('_method'))
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: MONGODB_URI }),
    })
);
app.use(bodyParser.urlencoded({
    extended: true
}));


//routes
app.use(router);

//view engine
app.set('view engine', 'pug');


export default app
