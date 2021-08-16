'use strict'
module.exports =(req,res,next)=>{
    console.log('REQUEST LOGGER:',req.mthod,req.path);
    next();
}