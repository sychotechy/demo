//Detecting button press

for(var i=0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var whichButton = this.textContent;
        drums(whichButton);
        buttonAnimation(whichButton);
    });
}

//Detecting key press

document.addEventListener("keypress",function(event){
    var whichButton = event.key;
    drums(whichButton);
    buttonAnimation(whichButton);
})

//Function for making noises

function drums(whichButton){
    switch(whichButton){
        case 'w':
            var tom1 = new Audio('./Sounds/tom1.wav');
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio('./Sounds/tom2.wav');
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio('./Sounds/tom3.wav');
            tom3.play();
            break;

        case 'd':
            var kick = new Audio('./Sounds/kick.wav');
            kick.play();
            break;

        case 'j':
            var crash = new Audio('./Sounds/crash.wav');
            crash.play();
            break;

        case 'k':
            var snare = new Audio('./Sounds/snare.wav');
            snare.play();
            break;

        case 'l':
            var tamb = new Audio('./Sounds/tamb.wav');
            tamb.play();
            break;

        default: console.log(whichButton);
    }
}

function buttonAnimation(whichKey){
    var activeButton = document.querySelector("."+whichKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100);
}