"use strict"

var searchButton=document.querySelector('button');
var searchCity=document.querySelector('input');

var loadingText=document.querySelector('#load');
var weatherBox= document.querySelector('#weather');

var weatherCity=weatherBox.firstElementChild;
var weatherDescription = document.querySelector('#weatherDescription');
var weatherTemperature=weatherBox.lastElementChild;
