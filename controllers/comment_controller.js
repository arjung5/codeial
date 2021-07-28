const Comment=require('../models/comment');
const Post=require('../models/post');


module.exports.createComment=(req,res)=>{
    //console.log('I have hit the controller')

    Post.findById(req.body.postId,(err,post)=>{
        if(err)
        {
            console.log(`This is error while creating a comment and error is ; ${err}`);
            return;
        }
        if(post)
        {
            
        //console.log(req.body.postId);
        //console.log(post);
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
                //console.log(`This is comment data : ${data}`)
                post.comments.push(data);
                post.save();
                //console.log(`This is comment data ${post}`);
                return res.redirect('back');
            }
        )
        }
    })
}


module.exports.destroys=(req,res)=>{
    console.log(`The id are commentId:- ${req.params.commentId}`);
    Comment.findById(req.params.commentId,(err,comment)=>{
        if(err)
        {
            console.log(`Error while deleteing a comment ${err}`);
            return;
        }
        console.log(`The data is ${comment}`)
        console.log(`The user id is ${comment.user}`)
        console.log(`The user id is ${req.user.id}`)
        if(comment.user==req.user.id)
        {
            let postId=comment.post;
            comment.remove();
            // Post.findById(postId,(err,post)=>{
            //     if(err)
            //     {
            //         console.log(`The error`)
            //     }
            //     post.comments.remove(postId);
            //     post.save();
            // })
            console.log(`This is comment id: ${req.params.commentId}`)
            Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.commentId}},(err,sucess)=>{
                console.log(`This is success for ${sucess}`);
                if(err)
                {
                    console.log(`The error`)
                    return;
                }
                return res.redirect('back');

            })

//            return res.redirect('back');
        }
 //       return res.redirect('back');
    })
};
    
    
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



