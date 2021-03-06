var canvas = document.getElementById("slate");
var clearButt = document.getElementById("clear");
var toggleButt = document.getElementById("toggle");
var ctx = canvas.getContext('2d');
var toggleOpt = 0;

var oldX = -1;
var oldY = -1;

var place = function(e){
    if(toggleOpt == 0){
	ctx.fillStyle = "red";

	ctx.beginPath();
	if(oldX > -1){
	    ctx.lineTo(oldX, oldY);
	}
	ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();


    }
    else if(toggleOpt == 1){
	ctx.fillStyle = "black";

	ctx.beginPath();
	if(oldX > -1){
	    ctx.lineTo(oldX, oldY);
	}
	ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI);
	ctx.stroke();
    }
    else{ //if toggleOpt is 2

	if(oldX > -1){
	    ctx.lineTo(oldX, oldY);
	}
	ctx.stroke();
	ctx.fillRect(e.offsetX, e.offsetY, 55, 45);

    }
    oldX = e.offsetX;
    oldY = e.offsetY;
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