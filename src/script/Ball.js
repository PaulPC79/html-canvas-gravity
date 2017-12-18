export default class Ball {
    constructor(x,y,dx,dy,radius,color,context,mouse) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.context = context;
        this.mouse = mouse;
        this.friction = 0.99;
        this.gravity = 1;
    }

    update() {
        if(this.y + this.radius + this.dy > window.innerHeight) {
            this.dy = -this.dy * this.friction;
        } else {
            this.dy += this.gravity;
        }

        if(this.x + this.radius + this.dx > window.innerWidth || this.x - this.radius <= 0 ) {
            this.dx = -this.dx;
        }
        
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
    draw() {
        this.context.beginPath();
        this.context.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
}