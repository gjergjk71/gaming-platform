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
					"fillStyle":"orange","speed":10,"shooting_speed":0}
var rect2_settings = {"x":300,"y":100,"w":150,"h":50,
					"strokeStyle":"rgba(0, 0, 100, 200.5)",
					"fillStyle":"orange","speed":10}
var enemy_rect_settings = {"x":undefined,"y":-5,"w":undefined,"h":undefined,
					"strokeStyle":"rgba(0, 0, 100, 200.5)",
					"fillStyle":"green","speed":2,"shooting_speed":0}
var arc1_settings = {"x":440,"y":425,"r":15,"sAngle":0,
					"eAngle":2*Math.PI,"strokeStyle":"rgba(0, 0, 100, 200.5)",
					"fillStyle":"orange","speed":20};

health = document.getElementById("health");

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
var throw_falling_arcs = true;
var falling_arc = [];
var arcs_in_a_row = 2
var enemies_rect =[];

function increase_difficulty() {
		if (arcs_in_a_row < 15) {
			arcs_in_a_row++;
			if (arcs_in_a_row < 5) {
				window.setInterval(increase_difficulty,1000)
			} else if (arcs_in_a_row < 10) {
				window.setInterval(increase_difficulty,1000 * Math.floor((Math.random() * 30) + 1))		
			}
			else if (arcs_in_a_row > 10) {
				window.setInterval(increase_difficulty,10000)		
			}
		} else {
			arcs_in_a_row--;
			window.setInterval(increase_difficulty,1000)		
		}
};

function add_enemy() {
	enemy_rect_settings.x = 80 * Math.floor((Math.random() * 10) + 1);
	enemy_rect_settings.w = 11 * Math.floor((Math.random() * 10) + 1);
	enemy_rect_settings.h = 11 * Math.floor((Math.random() * 10) + 1);
	enemies_rect.push(enemy_rect_settings);
	console.log(enemies_rect);
}

add_enemy();
function draw() {
	this.ctx.clearRect(0,0,canvas.width,canvas.height);
	if (detect_rect_collision(rect1,rect2)) {
		rect1.fillStyle = "blue";
	} else if (detect_rect_arc_collision(rect1,arc1)) {
		rect1.fillStyle = "red";
	} else {
		rect1.fillStyle = "orange";
	}
	rect2.draw;
	rect1.draw;	
	arc1.draw;
	if (!falling_arc.length) {
		for (var x=0;x<= arcs_in_a_row;x++){
			
		}
	}
	for (var arc in falling_arc) {
		health_number = Number(health.innerHTML.split(" " )[1])
			if (detect_rect_arc_collision(rect1,falling_arc[arc])) {
				falling_arc.splice(arc,1);
				console.log(health.innerHTML);
				health.innerHTML = "Health: " + String(Number(health.innerHTML.split(" " )[1]) - 5);
			} else {
				ctx.beginPath();
				ctx.arc(falling_arc[arc].x,falling_arc[arc].y,falling_arc[arc].r,falling_arc[arc].sAngle,falling_arc[arc].eAngle,falling_arc[arc].counterclockwise);
				ctx.strokeStyle = "red";
				ctx.fillStyle = "orange";
				ctx.fill();
				ctx.stroke();
				ctx.closePath();
				falling_arc[arc].y += falling_arc[arc].speed;
			}
			if (health_number <= 0) {
				throw_falling_arcs = false;
				health.innerHTML = "Health: " + "0";
			}
	}
	for (var arc in arc_moving) {
		if (arc_moving[arc].y < -1) {
			health
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
	for (var enemy in enemies_rect){
		if (enemies_rect[enemy].y > canvas.height) {
			delete enemies_rect[enemy];
			health.innerHTML = "Health: " + String(Number(health.innerHTML.split(" " )[1]) - 5);
		} else {
			ctx.beginPath();
			var enemy_rect = new Rectangle(ctx,enemies_rect[enemy].x,
									   enemies_rect[enemy].y,
									   enemies_rect[enemy].w,
									   enemies_rect[enemy].h,
									   enemies_rect[enemy].strokeStyle,
									   enemies_rect[enemy].fillStyle)
			enemy_rect.draw;
			enemies_rect[enemy].y += enemies_rect[enemy].speed;
			console.log(enemies_rect[enemy].x,enemies_rect[enemy].y);
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

function detect_rect_collision(object1,object2) {
	var horizontal_detection = (object1.x + object1.w >= object2.x && !(object1.x >= object2.x + object2.w));
	var vertical_detection = ((object1.y <= object2.y + object2.h) && (object1.y + object1.h >= object2.y));
	if (horizontal_detection && vertical_detection) {
		return true;
	}
	return false;
}
function detect_rect_arc_collision(object1,object2) {
	var horizontal_detection = (((object1.x + object1.w >= object2.x) || (object1.x + object1.w >= object2.x - object2.r)) && object1.x <= object2.x + object2.r);
	var vertical_detection = (((object1.y + object1.h >= object2.y) || (object1.y + object1.h >= object2.y - object2.r)) && object1.y <= object2.y + object2.r);
	if (horizontal_detection && vertical_detection) {
		return true;
	}
	return false;
}

function throwArc() {
	if (throw_falling_arcs){
		var falling_arc_settings = {"x":0,"y":0,"r":15,"sAngle":0,
								"eAngle":2*Math.PI,"strokeStyle":"rgba(0, 0, 100, 200.5)",
								"fillStyle":"orange","speed":5,"counterclockwise":false};
		falling_arc_settings.x = Math.floor((Math.random() * canvas.width) + 1);
		falling_arc_settings.y = Math.floor((Math.random() * 500) - canvas.height);
		falling_arc.push(falling_arc_settings);
	}
}

function shootArc() {
	var arc_settings = {"x":rect1.x + (rect1.w*(1/2)),"y":rect1.y,"r":15,"sAngle":0,
						"eAngle":2*Math.PI,"strokeStyle":"rgba(0, 0, 100, 200.5)",
						"fillStyle":"orange","speed":20,"counterclockwise":false};
	arc_moving.push(arc_settings);

}
function gameLoop() {
	if (keyState[32]) {
		shootArc();
	}
	if (keyState[37]) {
		moveRect(rect1.x - rect1.speed,rect1.y,rect1.w,rect1.h);
	}
	if (keyState[39]) {
		moveRect(rect1.x + rect1.speed,rect1.y,rect1.w,rect1.h);
	}
	if (keyState[40]) {
		moveRect(rect1.x,rect1.y + rect1.speed,rect1.w,rect1.h);
	}
	if (keyState[38]) {
		moveRect(rect1.x,rect1.y - rect1.speed,rect1.w,rect1.h);
	}				
	draw();
	window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);