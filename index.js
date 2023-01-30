var randomNumber1 = Math.floor((Math.random()*6))+1;
var randomImage1 = "image/dice" + randomNumber1+ ".png";
var randomNumber2 = Math.floor((Math.random()*6))+1;
var randomImage2 = "image/dice" + randomNumber2+ ".png";
document.querySelectorAll('img')[0].setAttribute('src' , randomImage1);
document.querySelectorAll('img')[1].setAttribute('src' , randomImage2);
if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice(){
if(randomNumber1>randomNumber2){
    document.querySelector('.title').classList.add('winner');
    document.querySelector('.title').innerHTML="🚩 Player 1 wins! ";
}
else if(randomNumber1<randomNumber2){
    document.querySelector('.title').classList.add('winner');
    document.querySelector('.title').innerHTML="Player 2 wins! 🚩 "; 
}
else{
    document.querySelector('.title').classList.add('winner');
    document.querySelector('.title').innerHTML="Draw! ";
}
}