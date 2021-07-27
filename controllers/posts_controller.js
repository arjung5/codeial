const Post=require('../models/post');
const comments=require('../models/comment');
module.exports.posts=(req,res)=>{
    Post.find({}).populate('user').populate({
        path:'comments',
        populate:{
            path:'user'
        }
    }).exec((err,posts)=>{
        if(err)
        {
            console.log('Hey there');
            return;   
        }
        for(let value of posts)
        {

            comments.find({'_id':value.comments},(err,data)=>{
                if(err)
                {
                    console.log(`This is an error occured at fetching comment from a post ${err}`);
                    return;
                }
               // console.log(`This is data: ${value}`)
                if(data)
                {
                   // posts.value.comment=data;
                }
             //   value.set('commet',data);

            })
        }
        // //console.log(posts);
        return res.render('post',{
            title:"this is codeial",
            content_list:posts
        })
    })
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
            return res.redirect('/posts');
        })
    }
    else
    {
        res.redirect('/users/sign-in');
    }
}



