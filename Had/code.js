//CANVAS //zoberie štvorec biely na canvas, do canvas viem kresliť a vie sa to tam hýbať
const canvas = document.querySelector("canvas"); //vytiahne mi canvas z dokumentu
const ctx = canvas.getContext("2d"); //idem na canvas kresliť 2d veci
 
//LISTENERS, ak key down spustim funkciu keypush
document.addEventListener("keydown", keyPush);

//PLAYER
const snakeSize = 15;
let snakePosX = 0;
let snakePosY = canvas.height / 2;

//food
let foodX = 0;
let foodY = 0;

//score
let score = 0;

// kam idem, 0,1,-1, 1 dopredu -1dozadu 0stojim, nasobim tym pohyb, rychlost snakea
let velocityX = 1;
let velocityY = 0;

const tileCountX = (canvas.width / snakeSize);
const tileCountY = (canvas.height / snakeSize);

let snakeSpeed = snakeSize;
//loop
function gameLoop(){
    drawStuff();
    //moveStuff();
   //pouziam ak chcem plynuly pohyb, co neskace po mriezke requestAnimationFrame(gameLoop);
   setTimeout(gameLoop, 1000 /15);
       
}
resetFood();
gameLoop();


function moveStuff(){
    snakePosX += snakeSpeed*velocityX;
    snakePosY += snakeSpeed*velocityY;

    if (snakePosX > (canvas.width - snakeSize)){
        snakePosX = 0;
    }
    if (snakePosX < 0){
        snakePosX = canvas.width;
    }
    if (snakePosY > (canvas.height - snakeSize)){
        snakePosY = 0;
    }
    if (snakePosY < 0){
        snakePosY = canvas.height;
    }

    //food collision
    if(snakePosX === foodX && snakePosY === foodY){
        score +=1;
        resetFood();
    }

}

//DRAW everything
function drawStuff(){
    rectangle("#ffbf00", 0, 0, canvas.width, canvas.height);
    drawGrid();
    rectangle('black', snakePosX, snakePosY, snakeSize, snakeSize);
    rectangle('blue', foodX, foodY, snakeSize, snakeSize);
}

//rectangle draw
function rectangle(color, x, y, width, height){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

//KEYBOARD
function keyPush(event){
    //ktory key bol stlaceny
    //alert(event.key)
    switch (event.key){
        case "ArrowUp":
            if (velocityY !== 1){
                velocityX = 0;
                velocityY = -1;
            }
            break;
        case "ArrowDown":
            if (velocityY !== -1){
            velocityX = 0;
            velocityY = 1;
            }
            break;
        case "ArrowLeft":
            if (velocityX !== 1){
            velocityX = -1;
            velocityY = 0;
            }
            break;
        case "ArrowRight":
            if (velocityX !== -1){
            velocityX = 1;
            velocityY = 0; 
            }
            break;
            
    }
}

//kreslenie Mriezky
function drawGrid(){
    for(let i = 0; i < tileCountX; i++){
        for(let j = 0; j < tileCountY; j++){
         rectangle('#fff', snakeSize * i, snakeSize * j, snakeSize-1, (snakeSize-1));
        }
    }
}


//randomize food position
function resetFood(){
    foodX = (Math.floor(Math.random() * tileCountX) * snakeSize);
    foodY = (Math.floor(Math.random() * tileCountY) * snakeSize);
}