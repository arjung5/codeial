const express=require('express');
const router=express.Router();
const passport=require('passport');

const postController=require('../controllers/posts_controller');


router.get('/',passport.checkAuthentication,postController.posts);


router.get('/destroys/:postId',postController.destroy);

module.exports=router;
