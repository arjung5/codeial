module.exports.profile=(req,res)=>{
    return res.render('user_profile',{
        title:"User Profile Page"
    })
};
module.exports.userfriend=(req,res)=>{return res.end('<h1>This is User_Controller and action is friendList</h1>')};


