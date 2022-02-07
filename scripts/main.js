//id from index.html
let canvas = document.getElementById("Lawton");
let ctx = canvas.getContext("2d");

//vitamin info
let defHeight = 50;
let defWidth = 50;
let defX = (canvas.width - defWidth) / 2;

let x = canvas.width / 2;
let y = canvas.height - 30;

let rightPressed = false;
let leftPressed = false;




//draw multi vitamin
function drawDefender() {
    ctx.beginPath();
    ctx.rect(defX, canvas.height - defHeight, defWidth, defHeight);
    ctx.fillStyle = "#b3b3b3";
    ctx.fill();
    ctx.closePath();
}

//creates objects
function draw() {
    //clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw multivitamin
    drawDefender();

    //move vitamin
    if (rightPressed) {
        defX += 6.5;
        if (defX + defWidth > canvas.width) {
            defX = canvas.width - defWidth;
        }
    }
    else if (leftPressed) {
        defX -= 6.5;
        if (defX < 0) {
            defX = 0;
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
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(draw, 10);