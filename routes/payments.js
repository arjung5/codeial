const express=require('express');
const router=express.Router();


const paymentController=require('../controllers/payment_controller');

router.get('/',(req,res)=>{
    return res.end("<p>This is the response for users only</p>")
});


router.get('/refund',paymentController.payment);

module.exports=router;
