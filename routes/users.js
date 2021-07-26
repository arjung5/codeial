const express=require('express');
const router=express.Router();


const usersController=require('../controllers/users_controller');

router.get('/',(req,res)=>{
    return res.end("<p>This is the response for users only</p>")
});



router.get('/profile',usersController.profile);


//Action for Sign Up
router.get('/sign-up',usersController.signup);
router.post('/sign-up',usersController.register);
router.get('/sign-in',usersController.signIn);
router.post('/create-session',usersController.createSession);
module.exports=router;