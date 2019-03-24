const express = require("express");
const app = express();

const morgan = require('morgan');
const bodyParser= require('body-parser');




const productRoutes=require('./api/routes/products');
const orderRoutes=require('./api/routes/orders');
//const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://:'+process.env.DB_PWD+'@cluster0-8v5tz.mongodb.net/test?retryWrites=true')
//handle log
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.use((req,res,next)=>{
    res.header('Access-Allow-Control-Origin','*,null');
    res.header('Access-Allow-Control-Headers','*');
    if(req.method==='OPTIONS')
    {
        res.header('Access-Allow-Allow-Methods','PUT,GET,POST,PATCH,DELETE')
        return res.status(200).json({});
    }
    next();
});




app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

app.use((req,res,next)=>{
    const error=new Error('Not Found!');
    error.status=404;    
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json(
        {
            message:error.message
        }
    );    
});

module.exports=app;
