//CANVAS //zoberie štvorec biely na canvas, do canvas viem kresliť a vie sa to tam hýbať
const canvas = document.querySelector("canvas"); //vytiahne mi canvas z dokumentu
const ctx = canvas.getContext("2d"); //idem na canvas kresliť 2d veci
 
//LISTENERS, ak key down spustim funkciu keypush
document.addEventListener("keydown", keyPush);

//PLAYER
const snakeSize = 25;
let snakePosX = 0;
let snakePosY = canvas.height / 2 - snakeSize / 2;

// kam idem, 0,1,-1, 1 dopredu -1dozadu 0stojim, nasobim tym pohyb, rychlost snakea
let velocityX = 1;
let velocityY = 0;

let snakeSpeed = 4;
//loop
function gameLoop(){
    drawStuff();
    moveStuff();
    requestAnimationFrame(gameLoop);
}

gameLoop();

function moveStuff(){
    snakePosX += snakeSpeed*velocityX;
    snakePosY += snakeSpeed*velocityY;

    if (snakePosX > canvas.width){
        snakePosX = 0;
    }
    if (snakePosX < -snakeSize){
        snakePosX = canvas.width;
    }
    if (snakePosY > canvas.height){
        snakePosY = 0;
    }
    if (snakePosY < -snakeSize){
        snakePosY = canvas.height;
    }
}

//DRAW everything
function drawStuff(){
    rectangle('white', 0, 0, canvas.width, canvas.height);
    rectangle('black', snakePosX, snakePosY, snakeSize, 25);
}

//rectangle draw
function rectangle(color, x,y,height){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, height/2);
}

//KEYBOARD
function keyPush(event){
    //ktory key bol stlaceny
    //alert(event.key)
    switch (event.key){
        case "ArrowUp":
            velocityX = 0;
            velocityY = -1;
            break;
        case "ArrowDown":
            velocityX = 0;
            velocityY = 1;
            break;
        case "ArrowLeft":
            velocityX = -1;
            velocityY = 0;
            break;
        case "ArrowRight":
            velocityX = 1;
            velocityY = 0; 
            break;
            
    }
}