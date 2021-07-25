const express=require('express');
const router=express.Router();


const usersController=require('../controllers/users_controller');

router.get('/',(req,res)=>{
    return res.end("<p>This is the response for users only</p>")
});



router.get('/profile',usersController.profile);
router.get('/friendList',usersController.userfriend);

module.exports=router;