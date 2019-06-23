const path=require('path');
const rootDir=require('../util/path');
var unirest=require('unirest');

var pro=[];
const express=require('express');
const wor=require('./dict');
const router=express.Router();

router.get('/',(req,res,next) =>{
    const words=wor.products;
    const s=words.length;
    if(s==0){
        res.render('mean',{prods: pro, tit: 'No word to search'})
    }
    unirest.get("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term="+words[s-1].title)
.header("X-RapidAPI-Host", "mashape-community-urban-dictionary.p.rapidapi.com")
.header("X-RapidAPI-Key", "b53da327f9msha288d29e14ae41ap1fbf46jsnc1c6a0979dae")
.end(function (result) {
    for(i=0;i<6;i++){
    pro[i]=result.body.list[i].definition;
    console.log(pro[i]);
    
    }
    
    res.render('mean',{prods: pro , tit: words[s-1].title});
})
    
});

module.exports=router;
