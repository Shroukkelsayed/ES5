
const userModel = require('../../../DB/model/User.model.js')


module.exports.signup= (req , res , next)=>{
    return res.status(200).json({message:"Signup" ,  users:userModel})

}

module.exports. confirmEmail= (req , res , next)=>{
    return res.status(200).json({message:"confirm email"})

}

