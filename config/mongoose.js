const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development',{ useUnifiedTopology: true ,useNewUrlParser: true}).then(console.log('Connected Sucessfully to Database')).catch((err)=>{
    console.log(`There is an error in connecting to Database : ${err}`)
});

const db=mongoose.connection;


module.exports=db;
