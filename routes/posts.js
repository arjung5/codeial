const express=require('express');
const router=express.Router();
const passport=require('passport');


const postController=require('../controllers/posts_controller');


router.get('/',postController.posts);

router.post('/create',postController.CreatePost);

module.exports=router;
