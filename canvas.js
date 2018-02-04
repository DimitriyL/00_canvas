var canvas = document.getElementById("slate");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
var ctx = canvas.getContext('2d');

var place = function(e){
    var mouseX = e.x;
    var mouseY = e.y;
    
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

canvas.addEventListener("click", place);
