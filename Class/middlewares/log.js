module.exports=(req,res,next)=>{
    consolg.log(req.url);
    next();
}