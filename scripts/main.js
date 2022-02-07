//id from index.html
let canvas = document.getElementById("Lawton");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50. 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

//shopping cart info
let defHeight = 50;
let defWidth = 50;
let defX = (canvas.width - defWidth) / 2;

let x = canvas.width / 2;
let y = canvas.height - 30;


//draw multi vitamin
function drawDefender() {
    ctx.beginPath();
    ctx.rect(defX, canvas.height - defHeight, defWidth, defHeight);
    ctx.fillStyle = "0095DD";
    ctx.fill();
    ctx.closePath();
}
 
//creates objects
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawDefender();
}
