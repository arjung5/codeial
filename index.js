const express=require('express');

const app= express();
const port =8080;
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);
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
