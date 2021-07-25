const express=require('express');

const app= express();
const port =8080;

app.listen(port,(err)=>{
    if(err) console.log(`Error occured at creating the server ${err}`)
    else console.log(`The server is runnning at port ${port}`);
})
