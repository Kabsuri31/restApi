const express = require('express');

const router = express.Router();

//const mongoose =require('../models/products')

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "Product details!"
});
});

router.post('/',(req,res,next)=>{
    const product ={
        _id:mongoose.Types.ObjectId,
        price:req.body.price,
        name:req.body.name

    };
    product.save().then
    res.status(201).json({
        message: "Product created",
        createdProduct:product

});
});

router.get('/:productId',(req,res,next)=>{
    
    res.status(200).json({
        message: "Product details",
        ProductId: req.params.productId

});
});


module.exports=router;