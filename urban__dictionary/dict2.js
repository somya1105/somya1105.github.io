var unirest=require('unirest');

var pro=[];
var load=document.querySelector('#load');
var  box=document.querySelector('#weather')
var def=document.querySelector('#defi')
const word=document.getElementById('word');
console.log(word);
const but=document.querySelector('#find');
but.addEventListener('click',findmeaning);
function findmeaning(){
load.style.display="block";
box.style.display="block";
unirest.get("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term="+word.value)
.header("X-RapidAPI-Host", "mashape-community-urban-dictionary.p.rapidapi.com")
.header("X-RapidAPI-Key", "b53da327f9msha288d29e14ae41ap1fbf46jsnc1c6a0979dae")
.end(function (result) {
    for(i=0;i<6;i++){
    pro.push(result.body.list[i].definition);
    box.textContent+=pro[i];
    }
    load.style.display="none";
    box.style.display="block";
})
}
