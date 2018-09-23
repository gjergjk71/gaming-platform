class Rectangle{
	constructor(ctx,x,y,w,h,
				strokeStyle,
				fillStyle,
				speed)
	{
		this.ctx = ctx;
		this.strokeStyle = strokeStyle;
		this.fillStyle = fillStyle;
		this.speed = speed;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	};
	get draw() {
		return this.reDraw();
	}
	reDraw(){
		this.ctx.beginPath();
		this.ctx.rect(this.x,this.y,this.w,this.h);
		this.ctx.strokeStyle = this.strokeStyle;
		this.ctx.fillStyle = this.fillStyle;
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.closePath();				
	}	
}
class Arc{
	constructor(ctx,x,y,r,sAngle,eAngle,
				strokeStyle,
				fillStyle,
				speed,
				counterclockwise=false)
	{
		this.ctx = ctx;
		this.strokeStyle = strokeStyle;
		this.fillStyle = fillStyle;
		this.speed = speed;
		this.x = x;
		this.y = y;
		this.r = r;
		this.sAngle = sAngle;
		this.eAngle = eAngle;
		this.counterclockwise = counterclockwise;
	}
	get draw() {
		return this.reDraw();
	}
	reDraw() {
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,this.sAngle,this.eAngle,this.counterclockwise);
		ctx.strokeStyle = "blue";
		ctx.fillStyle = "orange";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");