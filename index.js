const express=require('express');

const db=require('./config/mongoose');
const app= express();
const port =8080;
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);
//teeling browser to extract style and scripts from sub pages body into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.use(express.static('./assets'))
//use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,(err)=>{
    if(err) console.log(`Error occured at creating the server ${err}`)
    else console.log(`The server is runnning at port ${port}`);
})
