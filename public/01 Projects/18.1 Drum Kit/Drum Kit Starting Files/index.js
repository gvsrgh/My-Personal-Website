for(var i = 0;i<document.querySelectorAll(".drum").length;i++)
    document.querySelectorAll("button")[i].addEventListener("click",function (){
    var b = this.innerHTML;
    buttonAnimation(b);
    switch(b){
        case 'w':
            var a = new Audio('./sounds/crash.mp3');
            a.play();
            break;
        case 'a':
            var a = new Audio('./sounds/kick-bass.mp3');
            a.play();
            break;
        case 's':
            var a = new Audio('./sounds/snare.mp3');
            a.play();
            break;
        case 'd':
            var a = new Audio('./sounds/tom-1.mp3');
            a.play();
            break;
        case 'j':
            var a = new Audio('./sounds/tom-2.mp3');
            a.play();
            break;
        case 'k':
            var a = new Audio('./sounds/tom-3.mp3');
            a.play();
            break;
        case 'l':
            var a = new Audio('./sounds/tom-4.mp3');
            a.play();
            break;
        default:
    };
});

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch(key){
        case 'w':
            var a = new Audio('./sounds/crash.mp3');
            a.play();
            break;
        case 'a':
            var a = new Audio('./sounds/kick-bass.mp3');
            a.play();
            break;
        case 's':
            var a = new Audio('./sounds/snare.mp3');
            a.play();
            break;
        case 'd':
            var a = new Audio('./sounds/tom-1.mp3');
            a.play();
            break;
        case 'j':
            var a = new Audio('./sounds/tom-2.mp3');
            a.play();
            break;
        case 'k':
            var a = new Audio('./sounds/tom-3.mp3');
            a.play();
            break;
        case 'l':
            var a = new Audio('./sounds/tom-4.mp3');
            a.play();
            break;
        default:
    };
}

function buttonAnimation(key){
    var ab = document.querySelector("."+key);
    ab.classList.add("pressed");
    setTimeout(function()
    {
        ab.classList.remove("pressed");
    },100);
}