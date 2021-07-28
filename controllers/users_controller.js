const User=require('../models/user');

module.exports.profile=(req,res)=>{


    User.findById(req.params.id,(err,data)=>{
        
        return res.render('user_profile',{
                 title:"User Profile Page",
                 profile_user:data
             })
    })
};


module.exports.signup=(req,res)=>{
    return res.render('signup',{
        title:'Sign-Up'
    });
};

module.exports.register=(req,res)=>{
    // console.log(`This is a post request of Url : ${req.url}`)
    // console.log(req.body);

    // {
    //     email:req.body.email,
    //     password:req.body.password,
    //     name:req.body.name
    // }
    if(req.body)
    {
        if(req.body.password!=req.body.confirm_password)
        {
            return res.redirect('back');
        }
            User.findOne({email:req.body.email},(err,user)=>{
                if(err){console.log('error in finding user in singing up'); return}
                if(!user){
                    User.create(req.body,(err,data)=>{
                        if(err) return console.log(`Error inadding data to database ${err}`);
                        //console.log(`*************************${data}`);
                        res.redirect('/users/sign-in');
                    })
                }
                else
                {
                    res.redirect('back');
                }

            })
    }
}

module.exports.signIn=(req,res)=>{
    return res.render('signin',{
        title:'SignIn'
    })
};

//Sign in and create a session for a User
module.exports.createSession=(req,res)=>{
    // if(req.body)
    // {
    //     User.find({email:req.body.email},(err,data)=>{
    //         if(err){
    //               alert('some error occured , please try again');
    //               return res.redirect('/create-session');
    //             }
    //         else{
    //             console.log(data);
    //             res.redirect('/');
    //         }
    //     })
    // }
    return res.redirect('/');
};

module.exports.destroySession=(req,res)=>{
    req.logout();
    return res.redirect('/');
};

module.exports.updateUser=(req,res)=>{
   // console.log(req.body);
    if(req.isAuthenticated() && req.body.id==req.user.id)
    {
       // console.log('entered in the function');
        User.findByIdAndUpdate(req.body.id,{$set:{email:req.body.email,name:req.body.name}},(err,sucess)=>{
            if(err)
            {
                console.log(err);
                return ;
            }
            return res.redirect('back');
        })
    }
    else
    {
        return res.redirec('back');
    }
}

module.exports.addFriend=(req,res)=>{
  //  console.log('Enters in AddFriend')
    if(req.isAuthenticated())
    {
        User.findByIdAndUpdate(req.user.id,{$push:{requestSend:req.params.id}},(err,data)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            if(data)
            {
                User.findByIdAndUpdate(req.params.id,{$push:{requestReceived:req.user.id}},(err,dataRecei)=>{
                    if(err)
                    {
                        console.log(err);
                        return;
                    }
                    return res.redirect('back');
                })
            }
            else
            {
                return res.redirect('back');
            }
        })
    }
}