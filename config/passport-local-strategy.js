const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user')


// authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
},(email,password,done)=>{
    //find the user and establish the identity
    User.findOne({email:email},(err,user)=>{
        if(err)
        {
            console.log(`There is error whilie Using paddport middleware , and the errror is : ${err}`);
            return done(err);
        }
        if(!user || user.password!=password)
        {
            return done(null,false);
        }
        done(null,user);
    })
}))

//serializing the user to decide which key is to kept in the cookies
passport.serializeUser((user,done)=>{
    done(null,user.id);
})


// deserilizing the use form the key in the cookies
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        if(err) 
        {
            console.log(`There is error in finding user passport : ${err}`)
            return  done(err);
           };

         return done(null,user);
    })
    
});

//check if the user is authenticated
passport.checkAuthentication=(req,res,next)=>{

    //if the user is signed in then pass the request tonext action
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/users/sign-in');
};

passport.checkAuthenticationSkip=(req,res,next)=>{

    if(req.isAuthenticated())
    {

        return res.redirect('/users/profile');
    }
    return next();
};

passport.setAuthenticatedUser=(req,res,next)=>{
    if(req.isAuthenticated())
    {
            // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        console.log(`***************${req.user}*************`);
        res.locals.user=req.user;
        console.log(`################# ${req.locals}`)
    }
    next();
}

