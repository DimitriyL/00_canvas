var canvas = document.getElementById("slate");
var clearButt = document.getElementById("clear");
var toggleButt = document.getElementById("toggle");
var ctx = canvas.getContext('2d');
var toggleOpt = 0;

var place = function(e){
    var mouseX = e.x;
    var mouseY = e.y;
  
    if(toggleOpt == 0){
	ctx.fillStyle = "red";

	ctx.beginPath();
	ctx.arc(mouseX - 5, mouseY - 75, 10, 0, 2 * Math.PI);
	ctx.fill();
    }
    else if(toggleOpt == 1){
	ctx.fillStyle = "black";
	
	ctx.beginPath();
	ctx.arc(mouseX - 5, mouseY - 75, 15, 0, 2 * Math.PI);
	ctx.stroke();
    }
    else{ //if toggleOpt is 2
	ctx.fillRect(mouseX - 5, mouseY - 75, 55, 45);
    }
}

canvas.addEventListener("click", place);

var clearFxn = function(e){
    ctx.clearRect(0, 0, 500, 500);
}

clearButt.addEventListener("click", clearFxn);

var toggleFxn = function(e){
    if (toggleOpt == 2){
	toggleOpt = 0;
    }
    else{
	toggleOpt += 1;
    }
}

toggleButt.addEventListener("click", toggleFxn);