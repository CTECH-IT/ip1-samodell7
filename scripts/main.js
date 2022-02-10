//id from index.html
let canvas = document.getElementById("Lawton");
let ctx = canvas.getContext("2d");
//person info
let defHeight = 50;
let defWidth = 50;
let defX = (canvas.width - defWidth) / 2;
let defY = (canvas.height - defHeight) / 2;
//defining
let vickX = canvas.width / 2;
let vickY = canvas.height - 30;
let z = 20
let personSpeed = 8;
//speed of vid
let dx = 3;
let dy = 3;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let score = 0;

//creates sprite
function drawDefender() {
    ctx.beginPath();
    ctx.rect(defX, defY, defWidth, defHeight);
    ctx.fillStyle = "#b3b3b3";
    ctx.fill();
    ctx.closePath();

}

// detects when covid hit person
function collisionDetect() {
    if (vickX + z > defX && vickX < defX + defWidth && vickY > defY && vickY + z < defY + defHeight) {
    alert("game over you got a whopping " + score);
    document.location.reload();
    clearInterval(interval);
    }
}

//draw covid
function DrawCovid() {
    ctx.beginPath();
    ctx.rect(vickX, vickY, z, z)
    ctx.fillStyle = "tomato";
    ctx.fill();
    ctx.closePath();
}

//defines a function to display score
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 8, 20);
}

//creates sprites, score, and others
function draw() {
    //clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawScore();

    //draw person
    drawDefender();

    collisionDetect();

    //covid
    DrawCovid();

    vickX += dx;
    vickY += dy;

    //edge detection, speed increases with score, points by touching x edge, increasing difficulty
    if (vickX + dx > canvas.width - 10 || vickX + dx < 10) {
        dx = -dx;
        score++;
        if (score == 5) {
            dx = dx * 1.3;
            dy = dy * 1.3;
        }
        if (score == 10) {
            dx = dx * 1.3;
            dy = dy * 1.3;
        }
        if (score == 17) {
            dx = dx * 1.3;
            dy = dy * 1.2;
        }
        if (score == 22) {
            dx = dx * 1.3;
            dy = dy * 1.3;
        }
        if (score == 30) {
            dx = dx * 1.3;
            dy = dy * 1.3;
        }
        if (score == 40) {
            dx = dx * 1.3;
            dy = dy * 1.3;
        }
        if (score == 50) {
            dx = dx * 1.3;
            dy = dy * 1.3;
        }
        if (score == 60) {
            dx = dx * 1.3;
            dy = dy * 1.3;
        }

    }
    if (vickY + dy > canvas.height - 10 || vickY + dy < 10) {
        dy = -dy;
    }



    //moves the sprite
    if (rightPressed) {
        defX += personSpeed;
        if (defX + defWidth > canvas.width) {
            defX = canvas.width - defWidth;
        }
    }
    else if (leftPressed) {
        defX -= personSpeed;
        if (defX < 0) {
            defX = 0;
        }
    }
    else if (upPressed) {
        defY -= personSpeed;
        if (defY < 0) {
            defY = 0;
        }
    }
    else if (downPressed) {
        defY += personSpeed;
        if (defY + defHeight > canvas.height) {
            defY = canvas.height - defHeight;
        }
    }



}

//defines pressed arrows
function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}
//defines released arrows
function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

//"listens" for the pressed and released keys
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//let interval allows a refresh of the page on loss
let interval = setInterval(draw, 10);