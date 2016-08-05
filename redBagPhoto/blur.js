var canvasWidth = 1024;
var canvasHeight = 768;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 768;

var image = new Image();
var radius = 50;
var clippingRegion = null

image.src = "111.jpg";
image.onload = function(e){
	initCanvas();
}

//用于重置 及 初始化
function initCanvas(){
	clippingRegion = {	
	  	x:Math.random()*(canvas.width-2*radius)+radius ,
	  	y:Math.random()*(canvas.height-2*radius)+radius ,
		r:radius
	}
	draw(image);
}


//设置canvas 剪切形状
function setClippingRegion(){
	context.beginPath();
	context.arc( clippingRegion.x , clippingRegion.y ,clippingRegion.r , 0 , Math.PI*2 ,false);
	context.clip();
}

function draw( image , clippingRegion ){	
	//Çå³þ
	context.clearRect(  0 , 0 , canvas.width , canvas.height ) ;
	//±£´æµ±Ç°×´Ì¬
	context.save();
	//¼ô¼­ÇøÓò
	setClippingRegion( clippingRegion );
	//»­Í¼
	context.drawImage( image , 0 , 0 );
	//×´Ì¬»Ö¸´
	context.restore();
}


//设置动画
var timer = null;

function show(){

	timer = setInterval(function(){
		clippingRegion.r += 20;
		if(clippingRegion.r > 2*Math.max(canvas.width,canvas.height)){
			clearInterval(timer)
		}
		draw( image , clippingRegion );
	},30);



}
function reset(){
	initCanvas();
	clearInterval(timer)
}