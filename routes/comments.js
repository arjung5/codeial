const express=require('express');
const router=express.Router();




const commentController=require('../controllers/comment_controller');

router.post('/create',commentController.createComment);

router.get('/destroys/:commentId',commentController.destroys);


module.exports=router;