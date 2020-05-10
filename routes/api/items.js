const express = require('express');
const router = express.Router();
const auth = require("../../middleware/auth");

const itemModel = require('../../models/Item');

// GET
router.get('/', (req, res)=> {
    itemModel.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch( err=> console.log(err))
})

// POST
router.post('/', auth, (req,res)=>{
    const newItem = new itemModel({
        name : req.body.name
    })
    newItem.save()
    .then(item=>res.json(item))
    .catch(err=>console.log(err))
})

// DELETE
router.delete('/:id', auth, (req,res)=>{
    itemModel.findById(req.params.id)
    .then(item => item.remove()
        .then( ()=> res.json({
            success : true
        }))
    )
    .catch(err=> res.status(404).json(
        {
            success:false
        })
    );
})
module.exports = router;