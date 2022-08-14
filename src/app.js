import express from "express";
import methodOverride from "method-override";
import { MONGODB_URI, PORT } from "./databases/mongoconfig.js";
import MongoStore from "connect-mongo";
import bodyParser from "body-parser";
import session from 'express-session';
import router from './routes/index.js'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//init
const app = express();

//settings
app.set("port", PORT);
const firebaseConfig = {
    apiKey: "AIzaSyBjOhwX_PmqK8WSz00tYDbUwOQFttH3F0M",
    authDomain: "crtimes.firebaseapp.com",
    projectId: "crtimes",
    storageBucket: "crtimes.appspot.com",
    messagingSenderId: "79105539476",
    appId: "1:79105539476:web:ea91181439fe75e50ce381",
    measurementId: "G-J016G00ESY"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);


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
