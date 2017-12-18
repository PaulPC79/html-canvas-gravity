import getRandomColor from './RandomColor.js';
import getRandomInt from './RandomIntFromRange.js';
import Ball from './Ball.js';

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
let c = canvas.getContext('2d'),
    ballArray = [],
    mouse = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener('resize', (event) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

window.addEventListener('click', (event) => {
    init();
});

function init() {
    ballArray = [];    
    for(let i = 0; i < 500; i+=1) {
        let radius = getRandomInt(8,20),
            x = getRandomInt(radius ,canvas.width - radius),
            y = getRandomInt(0,canvas.height - radius),
            dx = getRandomInt(-2,2),
            dy = getRandomInt(-2,2);            

        ballArray.push(new Ball(x, y, dx, dy, radius, getRandomColor(), c, mouse));
    }
    
}

export default function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, canvas.width, canvas.height);
    ballArray.map( b => b.update());
}

init();