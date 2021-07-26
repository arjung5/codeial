const express=require('express');

const db=require('./config/mongoose');

//Used for session cookie
const session =require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');

const app= express();
const port =8080;
const expressLayouts=require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const sassMiddleware=require('node-sass-middleware');
app.use(expressLayouts);
//teeling browser to extract style and scripts from sub pages body into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}))

app.use(express.static('./assets'))
app.use(express.urlencoded());
app.use(cookieParser());
//use express router

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

// monog store is used to store the session cookie in the db


const MongoStore = require('connect-mongo');
app.use(session({
    name:'codeial',
    //ToDo change the secret before deployemnt in production mode
    secret:'arjungarg',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*60)
    },
    store:MongoStore.create(
        {
        // mongooseConnection:db,
        mongoUrl: 'mongodb://localhost/codeial_development',
        autoRemove:'disabled'
        },
        function(err)
        {
        console.log(err || 'connect mongodb setup pk');
        }
    )

}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes'));


app.listen(port,(err)=>{
    if(err) console.log(`Error occured at creating the server ${err}`)
    else console.log(`The server is runnning at port ${port}`);
})
