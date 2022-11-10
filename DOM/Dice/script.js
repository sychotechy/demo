var randomNumber1 = Math.floor((Math.random()*6)+1);
document.querySelector('#player1-dice').textContent = randomNumber1;

var randomNumber2 = Math.floor((Math.random()*6)+1);
document.querySelector('#player2-dice').textContent = randomNumber2;

if(randomNumber1>randomNumber2){
    document.querySelector('#game-status').textContent = "Player 1 Wins";
}
else if(randomNumber1===randomNumber2){
    document.querySelector('#game-status').textContent = "Draw";
}
else{
    document.querySelector('#game-status').textContent = "Player 2 Wins";
}