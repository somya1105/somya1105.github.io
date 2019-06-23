const path=require('path');

const rootDir=require('../util/path');
let s=0;
const express=require('express');
const router=express.Router();
const products=[];
router.get('/get-word',(req,res,next) =>{
    console.log("get word");
    res.render('dict_ht');
});
router.post('/get-word',(req,res,next) =>{
    console.log("post word");
    console.log( req.body.title);
    products.push({title: req.body.title});
    console.log(products[0]);
    if(products[s-1]!='')
       res.redirect('/');
 });

exports.routes=router;
exports.products=products;



