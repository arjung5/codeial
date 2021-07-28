const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    requestReceived:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
       }
    ],
    requestSend:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
       }
    ],
    friendsList:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
       }
    ]
},{
    timestamps:true
});


const User=mongoose.model('User',userSchema);

module.exports=User;