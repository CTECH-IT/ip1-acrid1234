
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let shipHeight = 30;
let shipWidth = 40;
let shipX = (canvas.width - shipWidth) / 2;

let x = canvas.width / 2;
let y = canvas.height - 10;

let x2 = canvas.width - Math.random() * 100;
let y2 = canvas.height - Math.random() * 100;

let x3 = canvas.width - Math.random() * 100;
let y3 = canvas.height - Math.random() * 100;

let x4 = canvas.width - Math.random() * 100;
let y4 = canvas.height - Math.random() * 100;

let x5 = canvas.width - Math.random() * 200;
let y5 = canvas.height - Math.random() * 200;


let dx = 2;
let dy = -2;

let dx2 = 3;
let dy2 = -3;

let dx3 = 4;
let dy3 = -4;

let dx4 = 5;
let dy4 = -5;

let dx5 = 6;
let dy5 = 6;

let bulletRadius = 10 - (Math.random() * 5);
let bulletRadius2 = 10 - (Math.random() * 5);
let bulletRadius3 = 10 - (Math.random() * 5);
let bulletRadius4 = 10 - (Math.random() * 5);
let bulletRadius5 = 10 + (Math.random() * 5);

let lives = 100;
let level = 1;
let score = 0;

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height)

    //draw the ship
    drawShip()  

    //ship controls
    if (rightPressed) {
        shipX += 7; 
        if (shipX + shipWidth > canvas.width) {
            shipX = canvas.width - shipWidth;
        }
    }
    else if (leftPressed) {
        shipX -= 7;
        if (shipX < 0) {
            shipX = 0;
        }
    }

    //draw bullet
    drawBullet()
    if (level == 2) {
        drawBullet2();
    }
    if (level == 3) {
        drawBullet2();
        drawBullet3();
    }
    if (level == 4) {
        drawBullet2();
        drawBullet3();
        drawBullet4();
    }
    if (level == 5) {
        drawBullet2();
        drawBullet3();
        drawBullet4();
        drawBullet5();
    }

    //change position of ball
    x += dx;
    y += dy;

    x2 += dx2;
    y2 += dy2;
    
    x3 += dx3;
    y3 += dy3;

    x4 += dx4;
    y4 += dy4;

    x5 += dx5;
    y5 += dy5;

    //check edges and ball hitting ship
    if (x + dx > canvas.width - bulletRadius || x + dx < 0) {
        dx = -dx;
    }
    if (x2 + dx2 > canvas.width - bulletRadius2 || x2 + dx2 < 0) {
        dx2 = -dx2;
    }
    if (x3 + dx3 > canvas.width - bulletRadius3 || x3 + dx3 < 0) {
        dx3 = -dx3;
    }
    if (x4 + dx4 > canvas.width - bulletRadius4 || x4 + dx4 < 0) {
        dx4 = -dx4;
    }
    if (x5 + dx5 > canvas.width - bulletRadius5 || x5 + dx5 < 0) {
        dx5 = -dx5;
    }

    if (y + dy < bulletRadius) { //ceiling check
            dy = -dy;
     }
    if (y2 + dy2 < bulletRadius2) {
        dy2 = -dy2;
    }
    if (y3 + dy3 < bulletRadius3) {
        dy3 = -dy3;
    } 
    if (y4 + dy4 < bulletRadius4) {
        dy4 = -dy4;
    }
    if (y5 + dy5 < bulletRadius5) {
        dy5 = -dy5;
    }else if (y + dy > canvas.height - bulletRadius ||
        y2 + dy2 > canvas.height -bulletRadius2 ||
        y3 + dy3 > canvas.height -bulletRadius3 ||
        y4 + dy4 > canvas.height -bulletRadius4 ||
        y5 + dy5 > canvas.height - bulletRadius5) { //floor check
            if ((x > shipX && x < shipX + shipWidth) || 
            (x2 > shipX && x < shipX + shipWidth) ||
            (x3 > shipX && x < shipX + shipWidth) || 
            (x4 > shipX && x < shipX + shipWidth) ||
            (x5 > shipX && x < shipX + shipWidth)) { //ship check
                dy = -dy;
                dy2 = -dy2;
                dy3 = -dy3; 
                dy4 = -dy4;
                dy5 = -dy5;

                lives--;
                if (lives == 0) {
                    alert("GAME OVER u lose");
                    document.location.reload();
                    clearInterval(interval);
                }
                 else {
                    shipX = (canvas.width - shipWidth) / 2;
                    x = canvas.width / 2;
                    y = canvas.height - 100;
                    dx = 2;
                    dy = -2;

                    x2 = canvas.width / 2;
                    y2 = canvas.height - 150;
                    dx2 = 3;
                    dy2 = -2;

                    x3 = canvas.width / 2;
                    y3 = canvas.height - 200;
                    dx3 = 4;
                    dy3 = -4;

                    x4 = canvas.width / 2;
                    y4 = canvas.height - 250;
                    dx4 = 5;
                    dy4 = -5;

                    x5 = canvas.width/2;
                    y5 = canvas.height - 300;
                    dx5 = 6;
                    dy5 = 6;
            }
        }
            else {//it hit the floor 
                dy = -dy;
                dy2 = -dy2;
                dy3 = -dy3;
                dy4 = -dy4;
                dy5 = -dy5;
                }
            }



    //show lives and score and level
    drawLives()
    drawScore()
    drawLevel()
}

function timeScore() {
    score++;
    
    if (score == 10) {
        level++;
        score = 0;
    }
        if (level == 6) {
            alert("Congratulations, you won!");
        }
    }
    

function drawShip() {
    ctx.beginPath();
    ctx.rect(shipX, canvas.height - shipHeight, shipWidth, shipHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBullet() {
    ctx.beginPath();
    ctx.arc(x,y,bulletRadius,0,Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBullet2() {
    ctx.beginPath();
    ctx.arc(x2,y2,bulletRadius2,0,Math.PI*2);
    ctx.fillStyle = "#BFE727";
    ctx.fill();
    ctx.closePath();
}

function drawBullet3() {
    ctx.beginPath();
    ctx.arc(x3,y3,bulletRadius3,0,Math.PI*2);
    ctx.fillStyle = "#14B4C5";
    ctx.fill();
    ctx.closePath();
}

function drawBullet4() {
    ctx.beginPath();
    ctx.arc(x4,y4,bulletRadius4,0,Math.PI*2);
    ctx.fillStyle = "#C514AA";
    ctx.fill();
    ctx.closePath();
}

function drawBullet5() {
    ctx.beginPath();
    ctx.arc(x5,y5,bulletRadius5,0,Math.PI*2);
    ctx.fillStyle = "#3514C5";
    ctx.fill();
    ctx.closePath();
}


function drawLives() {
    ctx.font = "16px Times New Roman";
    ctx.fillStyle = "#0034AB"
    ctx.fillText("Lives: " + lives, 150, 20);
}

function drawScore() {
    ctx.font = "16px Times New Roman";
    ctx.fillStyle = "#0034AB";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLevel() {
    ctx.font = "16px Times New Roman";
    ctx.fillStyle = "#0034AB"
    ctx.fillText("Level: " + level, 250, 20);

}

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX <canvas.width) {
        shipX = relativeX - shipWidth / 2;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

document.addEventListener("mousemove", mouseMoveHandler,false);

let interval = setInterval(draw, 10);
let intervalTime = setInterval(timeScore, 1000)