const express=require('express');
const router=express.Router();
const passport=require('passport');

const usersController=require('../controllers/users_controller');

router.get('/',(req,res)=>{
    return res.end("<p>This is the response for users only</p>")
});



router.get('/profile/:id',passport.checkAuthentication,usersController.profile);

router.post('/profile/update',usersController.updateUser);
//Action for Sign Up
router.get('/sign-up',passport.checkAuthenticationSkip,usersController.signup);
router.post('/sign-up',usersController.register);
router.get('/sign-in',passport.checkAuthenticationSkip,usersController.signIn);

router.get('/addfriend/:id',usersController.addFriend);

//Use passport as a middlware to authenticate
router.post('/create-session',passport.authenticate('local',{failureRedirect:'/users/sign-in'},),usersController.createSession,);
router.get('/sign-out',usersController.destroySession);
module.exports=router;