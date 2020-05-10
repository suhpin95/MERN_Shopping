const express = require('express');
const router = express.Router();
const bCrypt = require("bcrypt");
const userModel = require('../../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');

// GET
router.post('/', (req, res)=> {
   const { name, emailId, passWord } = req.body;

   if( !name || !emailId || !passWord){
        return(res.status(400).json( {message: 'Please Enter all the field'} ));
   }
   userModel.findOne( {emailId} )
            .then( user=>{
                if(user) return res.status(400).json( { message: "User Already exists" })

                const newUser = new userModel({
                    name,
                    emailId,
                    passWord
                });
                // Create a salt
                bCrypt.genSalt(10 , (err, salt) => {
                    bCrypt.hash(newUser.passWord  , salt , (err,hash)=>{
                        if(err) throw err;
                        newUser.passWord = hash;
                        newUser.save()
                               .then(user=>{
                                   res.json({
                                       user : {
                                           id : user.id,
                                           name : user.name,
                                           emailID : user.emailId
                                       }
                                   })
                               })

                    })
                } )
            })
            .catch( err=> console.log(err))

})


module.exports = router;