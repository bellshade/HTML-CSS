    let inputDir = {x: 0, y: 0};	
let foodSound = new Audio('../music/food.mp3');
let gameOverSound = new Audio('../music/gameover.mp3');
let moveSound = new Audio('../music/move.mp3');
let musicSound = new Audio('../music/music.mp3');
let lastPaintTime = 0;
let speed = 5;
let score = 0;
let snakeArr = [{
    x: 12,
    y: 15
}];
let food = {
    x: 5,
    y: 8
};


//All the function goes here
function main(ctime){
    window.requestAnimationFrame(main);
//    console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
   // console.log(ctime);
    gameEngine();       
}   

function isCollide(sarr){
    //if the snnake collide with his body then
    
    for (let i = 1; i < snakeArr.length; i++) {
        if (sarr[i].x === snakeArr[0].x && sarr[i].y === snakeArr[0].y) {
            return true;    
        }   
    }
    if (snakeArr[0].x >= 20 || snakeArr[0].x <= 0 || snakeArr[0].y >= 20 || snakeArr[0].y <= 0) {
        return true;
    }
}

function gameEngine(){
    //updating the snake array and food 
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y: 0};
        alert("Game Over. Press any key to play again!")
        snakeArr = [{x: 12, y: 15}];
        // musicSound.play();
        score = 0;
    }

    //if snake eaten the food and increament the score and reggenerate the food again

    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        
        foodSound.play();           
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        //console.log(snakeArr)
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
        score += 1;
            if (score>hiscoreval) {
                hiscoreval = score;
                localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
                hiscoreBox.innerHTML = "Hi Score: " + hiscoreval;
            }
        scoreBox.innerHTML = "Score: " + score;
    }

    //moving the snake

    for (let i = snakeArr.length - 2 ; i >= 0; i--) {
        snakeArr[i+1] = {...snakeArr[i]};   
    }

    //moving the snake head
        snakeArr[0].x += inputDir.x;
        snakeArr[0].y += inputDir.y;

    //console.log(snakeArr)

    //display the snake array and food
    board.innerHTML = "";
    //display snake element
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    //  //display food element
    //  food.forEach((e,index) => {
    //     foodElement = document.createElement('div');
    //     foodElement.style.gridRowStart = e.y; 
    //     foodElement.style.gridColumnStart = e.x;
    //     foodElement.classList.add('food');
    //     board.appendChild(foodElement);
    // })

    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

    
}




//All the Game Logic goes here
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
}else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "Hi Score: " + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',(e) => {
    inputDir = {x:0, y:1};  //start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            //console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            //console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            //console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            //console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})