module.exports = (req, res, next)=>{
    if(req.session.student!=null)
        next();
    res.redirect('/auth/signin');
};