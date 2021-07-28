const Post = require('../models/post');
const User=require('../models/user');

module.exports.home=(req,res)=>  {
    //console.log(req.cookies); 
    //res.cookie('userId',25);
    if(req.isAuthenticated())
    {
       // console.log(req.user.id);
        User.findById(req.user.id).populate('requestSend')
                     .populate('requestReceived')
                     .populate('friendsList')
                     .exec((err,posts)=>{
            if(err)
           {
               console.log('Hey there');
            return;   
           }  

           //console.log(posts);
          User.find({},(err,userData)=>{
            if(err)
            {
                consoel.log(err);
                return ;
            }
           // console.log(userData)



            return res.render('home',{
                title:"Users List",
                users_list:userData,
                data_currentUser:posts
            })
        })
          
        })
        
    }
    else
    {
        return res.render('home',{
            title:"Home"
        })
    }
 }

// module.exports.actionName=(req,res)=>{return res.end('<h1>This is the actionName</h1>')}












