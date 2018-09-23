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