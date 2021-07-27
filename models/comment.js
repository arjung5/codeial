const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    //comment belings to user yes
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
       //comment belongs to post aslo yes
    post:{
        type:mongoose.Schema.Types.ObjectId,
        refer:'Post'
    }
},
{
    timestamps:true
})
const Comment=mongoose.model('Comment',commentSchema);
module.exports=Comment;