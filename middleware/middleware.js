const MyCollege=(req,res,next)=>{
    req.myclg="Cybrom! object";
    console.log("My app level middleware!!!");
    next();
}

module.exports =MyCollege