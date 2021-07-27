const Post=require('../models/post');

module.exports.posts=(req,res)=>{
    return res.render('post',{
        title:"This is Post Page"
    });
}


module.exports.CreatePost=(req,res)=>{
    if(req.isAuthenticated())
    {
        console.log(`This is the req is for the logged user that is:= ${req.user.id}`)
        Post.create({
            content:req.body.content,
            user:req.user.id
        },(err,data)=>{
            if(err)
            {
                console.log(`This the error caught while creating post in db and the error is :- ${err}`);
                return;
            }
            return res.redirect('/');
        })
    }
    else
    {
        res.redirect('/users/sign-in');
    }


}



