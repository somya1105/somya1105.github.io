
const express=require('express');
const bodyparser=require('body-parser');

const path=require('path');

const app=express();
app.set('view engine','pug');
app.set('views','views');

const dict=require('./urban__dictionary/dict');
const mean=require('./urban__dictionary/mean');
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));
app.use(dict.routes);
app.use(mean);


app.listen(3002);