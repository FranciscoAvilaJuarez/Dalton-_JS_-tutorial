
var nums = [10, 25, 15, 72, 75, 12]; 

var num = 42; 

function setup() {
    createCanvas (600, 600); 
    //document.write ('hi'); 
}

function draw() {
    background(0); 
    
    ellipse(100, 200, num, num); 
    ellipse(200, 200, nums[2], nums[2]); 
    ellipse(300, 200, nums[3], nums[2]); 
} 


let employees = ['E3650', 'DF6969FF', 'E5628', ]; 

let E3650 = {
    nam : 'paco',
    last : 'avila', 
    cad : true, 
    active : true,
    curp : 'PA3650TT',
};

let E6969 = {
    nam: 'daniel',
    last : 'fudge', 
    cad : false, 
    active : false,
    curp : 'DF6969FF',
}; 

let E5628 = {
    nam: 'paola',
    last : 'selda', 
    cad : true, 
    active : false,
    curp : 'PS5628TF',
}; 

let nam = employees['nam']; 
let last = employees['last']; 
let cad = employees['cad']; 
let active = employees['active'];
let curp = employees['curp']; 



document.write(employees[2]); 