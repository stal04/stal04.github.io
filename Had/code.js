//CANVAS
const canvas = document.querySelector("canvas");
//vytiahne mi canvas z dokumentu
const ctx = canvas.getContext("2d");
//idem na canvas kresliť 2d veci

//zoberie štvorec biely na canvas, do canvas viem kresliť a vie sa to tam hýbať
 

//PLAYER
const snakeSize = 50;
let snakePosX = 30;
let snakePosY = canvas.height / 2 - snakeSize / 2;


let snakeSpeed = 4;
//loop
function gameLoop(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snakePosX += snakeSpeed;

    if (snakePosX > canvas.width){
        snakePosX = 0;
    }
    
    ctx.fillStyle = "black";

    ctx.fillRect(snakePosX, snakePosY, snakeSize, 25);

    requestAnimationFrame(gameLoop);  
}

gameLoop();

