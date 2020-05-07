const express = require('express');
const router = express.Router();

const itemModel = require('../../models/Item');

// GET
router.get('/', (req, res)=> {
    itemModel.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch( err=> console.log(err))
})

// POST
router.post('/', (req,res)=>{
    const newItem = new itemModel({
        name : req.body.name
    })
    newItem.save()
    .then(item=>res.json(item))
    .catch(err=>console.log(err))
})
module.exports = router;