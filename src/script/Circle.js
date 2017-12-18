export default class Circle {
    constructor(x,y,dx,dy,radius,maxRadius,minRadius,context,color,mouse) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.maxRadius = maxRadius;
        this.minRadius = minRadius;
        this.context = context;
        this.color = color;
        this.mouse = mouse;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        this.context.strokeStyle = this.color;
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.stroke();
    }

    update() {
        if( this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        if( this.y + this.radius > window.innerHeight || this.y - this.radius < 0 ) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if( this.mouse.x - this.x < 50 && this.mouse.x - this.x > -50 && this.mouse.y - this.y < 50 && this.mouse.y -this.y > -50) {
            if(this.radius < this.maxRadius) {
                this.radius += 1;
            }
        } else if( this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}