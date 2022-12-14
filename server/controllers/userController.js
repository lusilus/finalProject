const User = require('../models/User')
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
var jwt = require('jsonwebtoken');


module.exports.register = async (req,res) => {

    try {
        console.log('register here', req.body)

        const {email, username, password} = req.body

        if (!email || !username || !password){
            res.send({success: false, error: 'validation failed'})

            return
        }
    
         const salt =  await bcrypt.genSalt(10)

         req.body.password = await bcrypt.hash(password, salt)
         console.log("TCL: module.exports.register -> req.body.password", req.body.password)
		

        const userCreated = await User.create(req.body)
	    console.log(" userCreated", userCreated)
        res.send({success: true})


    } catch (error) {
	console.log("register error", error.message)

    res.send('register error with ' +  error.message)

    }

}

module.exports.login = async (req,res) => {

    try {
        console.log('login here')

        const {email, password, username} = req.body

         if (!password ||( !email && !username )){
             res.send({success: false, error: 1})
             return
         }


//compering the registration data with the login. if it's in the db
        const userFound = await User.findOne({
            $or:[{email}, {username}],
             //password
            }).select('-__v')
            //can be selected also what we don't want:  select('-_V -password')
		console.log(" userFound", userFound)

        if (!userFound) return res.send({success: false, error: 2})
         
        const isMatch = await bcrypt.compare(password, userFound.password) 
		
        if (!isMatch) return res.send({success: false, error: 3})
        
        //generating token: payload, secret key, options
        const token = jwt.sign({_id: userFound._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
		console.log("TCL: module.exports.login -> token", token)

        res.cookie('register', token)
    //converting mongoose to an object:
       const user = userFound.toObject()
       delete user.password
       console.log("user after delete password in login -> user", user)

        res.send({success: true, user})

    } catch (error) {
	console.log("login error", error.message)

    res.send('error with ' +  error.message)

    }

}

module.exports.profile = async (req,res) => {

    try {
         console.log('hello profile: req.body', req.body)
        // console.log('hello profile: req.file', req.file)
        
        req.body.image = req.file.filename
         const {email, _id, username, address, artField, artistSince, customerTarget, education, goals, image } = req.body
     
        
        if (!email || !_id || !username){
            res.send({success: false ,error: 1})
            return
        }
       //const image = req.file.filename
         //const user2 ={address, artField, artistSince,customerTarget, education, goals, image}


        const user = await User.findByIdAndUpdate(_id, req.body, {new: true}).select('-__v -password')
		

        if (!user){
            res.send({success: false ,error: 2})
            return
        }
        console.log(user)
        res.send({success: true, user})
        
    } catch (error) {
	console.log("profile error", error)

    res.send({success: false ,error: error.message})

    }

}

module.exports.logout = async (req,res) => {

    try {
      //clearing the cookie  
    res.clearCookie('register')
        

        res.send({success: true})

    } catch (error) {
	console.log("logout error", error.message)

    res.send(  ' logout error with ' +  error.message)

    }

}