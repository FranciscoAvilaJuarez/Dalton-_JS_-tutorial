

const c = 30;
const G = 6;

let m87;

function setup() {
    createCanvas(600, 600);
    m87 = new Blackhole(100, 320, 6500);
}

function draw() {
    background(255);
    m87.show();
}

//create blackhole
class Blackhole {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.mass = m;
        this.rs = (2 * G * this.mass) / (c * c);
        alert(this.rs);
    }

    show() {
        fill(0); //with color black
        circle(this.pos.x, this.pos.y, this.rs * 2); //create circle with  
    }

}


