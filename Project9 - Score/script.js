const display = document.getElementById('score-display');
const button = document.getElementById('button');

function score(){
    let randomNumber = Math.floor(Math.random()*6)+1;
    button.innerText = randomNumber;
    display.innerText = Number(display.innerText) + randomNumber;
    if(Number(display.innerText)%6 === 0){
        display.innerText = 0;
    }
    else if(Number(display.innerText)>=50){
        alert("You have won the game");
        display.innerText = 0;
    }
}