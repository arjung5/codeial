module.exports.home=(req,res)=>  {
    //console.log(req.cookies); 
    //res.cookie('userId',25);
    return res.render('home',{
    title:"Home"
})}

// module.exports.actionName=(req,res)=>{return res.end('<h1>This is the actionName</h1>')}