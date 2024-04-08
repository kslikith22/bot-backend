const verifyRequest = (req,res,next)=>{
    const secret = req.headers.authorization
    if(secret == process.env.SECRET){
        next()
    } else {
        return res.status(403).json("Bad Request")
    }
}


module.exports = {
    verifyRequest
}