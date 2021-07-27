const Comment=require('../models/comment');
const Post=require('../models/post');


module.exports.createComment=(req,res)=>{
    console.log('I have hit the controller')

    Post.findById(req.body.postId,(err,post)=>{
        if(err)
        {
            console.log(`This is error while creating a comment and error is ; ${err}`);
            return;
        }
        if(post)
        {
            
        console.log(req.body.postId);
        console.log(post);
        Comment.create({
            title:'Create Comment',
            content:req.body.content,
            user:req.user.id,
            post:req.body.postId
        }
            ,(err,data)=>{
                if(err)
                {
                    console.log(`This is error while creating a comment and error is ; ${err}`);
                    return;
                }
                console.log(`This is comment data : ${data}`)
                post.comments.push(data);
                post.save();
                console.log(`This is comment data ${post}`);
                return res.redirect('back');
            }
        )
        }
    })
}

    
    
    // Comment.create({
    //     title:'Create Comment',
    //     content:req.body.content,
    //     user:req.user.id,
    //     post:req.body.postId
    // },(err,data)=>{
    //     if(err)
    //     {
    //         console.log(`This is error while creating a comment and error is ; ${err}`);
    //         return;
    //     }
    //     // Post.findOneAndUpdate(
    //     //     {_id:req.body.postId},
    //     //     {$push:{comments:data.id}},
    //     //     (err,sucess)=>{
    //     //         if (err) {
    //     //             console.log(err);
    //     //             return;
    //     //         } else {
    //     //             console.log(sucess);
    //     //            return res.redirect('back');
    //     //         }
    //     //     }
    //     // )
    //    //return  res.redirect('back');
    // })}






    