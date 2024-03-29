//this is the index.js for routes

const express=require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');


router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/payments',require('./payments'));
router.use('/posts',require('./posts'));
router.use('/comment',require('./comments'));
module.exports=router;
