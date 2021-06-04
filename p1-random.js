/*
    CIT 281 Project 1
    Name: Daphne Carwin
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let letters= ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k","q","r","s", "t", "u", "v", "w", "x", "y", "z"]; 
let l = getRandomInteger(5, 26);
let str="";
for(let i=0; i<l; i++){
    console.log(" "+(letters[Math.floor(Math.random()*letters.length)]));
}
