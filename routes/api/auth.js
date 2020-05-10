const express = require('express');
const router = express.Router();
const bCrypt = require("bcrypt");
const userModel = require('../../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require("../../middleware/auth");

// POST
router.post('/', (req, res)=> {
   const { emailId, passWord } = req.body;

   if(!emailId || !passWord){
        return(res.status(400).json( {message: 'Please Enter all the field'} ));
   }
   userModel.findOne( {emailId} )
            .then( user=>{
                if(!user) return res.status(400).json( { message: "User does not exists" })
                // Create a salt
               //password 
               bCrypt.compare(passWord,user.passWord)
                        .then( isMatch=>{
                            
                            if(!isMatch) return res.status(400).json({message:"Invalid Credentials"});
                            
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 2400 },
                                (err, token)=>{
                                    if(err) return err;
                                    else{
                                        res.json({
                                            token ,
                                            user : {
                                                id : user.id,
                                                name : user.name,
                                                emailID : user.emailId
                                            }
                                        })
                                    }
                                }
                            )
                        })
                        .catch(err=> console.log(err))
            })
            .catch( err=> console.log(err))

})

// We have to check the user token every time because JWT is stateless
router.get("/users", auth , (req,res)=> {
    userModel.findById(req.user.id)
             .select('-passWord')
             .then( user=> res.json(user) )
             .catch(err=> console.log(err))
})
module.exports = router;