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

var rect1_settings = {"x":360,"y":440,"w":150,"h":30,
					"strokeStyle":"rgba(0, 0, 100, 200.5)",
					"fillStyle":"orange","speed":6,"shooting_speed":5}
var rect2_settings = {"x":300,"y":100,"w":150,"h":50,
					"strokeStyle":"rgba(0, 0, 100, 200.5)",
					"fillStyle":"orange","speed":10}
var arc1_settings = {"x":440,"y":425,"r":15,"sAngle":0,
					"eAngle":2*Math.PI,"strokeStyle":"rgba(0, 0, 100, 200.5)",
					"fillStyle":"orange","speed":20};

rect1 = new Rectangle(ctx,
					  rect1_settings.x,
					  rect1_settings.y,
					  rect1_settings.w,
					  rect1_settings.h,
					  rect1_settings.strokeStyle,
					  rect1_settings.fillStyle,
					  rect1_settings.speed);
rect2 = new Rectangle(ctx,
					  rect2_settings.x,
					  rect2_settings.y,
					  rect2_settings.w,
					  rect2_settings.h,
					  rect1_settings.strokeStyle,
					  rect1_settings.fillStyle,
					  rect1_settings.speed);
arc1 = new Arc(ctx,
				arc1_settings.x,
				arc1_settings.y,
				arc1_settings.r,
				arc1_settings.sAngle,
				arc1_settings.eAngle,
				arc1_settings.strokeStyle,
				arc1_settings.fillStyle,
				arc1_settings.speed);

var keyState = {};
var arc_moving = [];
function draw() {
	this.ctx.clearRect(0,0,canvas.width,canvas.height);
	if (detect_rect_collision(rect1,rect2)) {
		rect1.fillStyle = "blue";
	} else if (detect_rect_arc_collision(rect1,arc1)) {
		
	} else {
		rect1.fillStyle = "orange";
	}
	rect2.draw;
	rect1.draw;	
	arc1.draw;
	for (var arc in arc_moving) {
		if (arc_moving[arc].y < -1) {
			delete arc_moving[arc];
		} else {
			ctx.beginPath();
			ctx.arc(arc_moving[arc].x,arc_moving[arc].y,arc_moving[arc].r,arc_moving[arc].sAngle,arc_moving[arc].eAngle,arc_moving[arc].counterclockwise);
			ctx.strokeStyle = "blue";
			ctx.fillStyle = "orange";
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			arc_moving[arc].y -= arc_moving[arc].speed;
		}
	}
}
draw();
document.addEventListener("keyup", (event) => {
	keyState[event.keyCode] = false; 

},false);
document.addEventListener("keydown", (event) => {
	keyState[event.keyCode] = true; 
},false);

function moveRect(x_pos,y_pos,w,h) { 
			object_over_canvas = y_pos < -1;
			object_under_canvas = y_pos + h > canvas.height;
			object_under_width = x_pos < -1;
			object_over_width = x_pos + w >= canvas.width + 5;
			if (!(object_over_canvas || object_under_canvas || object_over_width || object_under_width)){
				rect1.x = x_pos;
				rect1.y = y_pos;
			}
		};