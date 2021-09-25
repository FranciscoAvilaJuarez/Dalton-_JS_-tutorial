/* problem A 
ice cream; 

*enter ammount and show the most expensive 
*if there is two or more, show them 
*show change

reberto has 1.5
pedro has 1.7
pater has 3 

icecream prices 
*water ice cream .6
*iceCream stick 1
*one scoop 1.6
*two scop 1.7
*three scoop 1.8
*with toppings any size  2.9
*the pint 2.9

*enter ammount and show ice cream available to purchase
* if two or more with same price, show them
*need to show the change back
*/ 
/*
let paletaAgua = .6
let paletaCrema = 1
let oneScoop = 1.6
let twoScoop = 1.7
let threeScoop = 1.8
let toppings = 2.9
let pint = 2.9

let ammount = prompt('please enter ammount')

//ammount = parseInt(ammount)

if (ammount >= paletaAgua && ammount < paletaCrema){
    let change = ammount - paletaAgua
    alert(`comprate una paletaAgua,  ${paletaAgua} and your change is ${change}`)
} 

else if (ammount >= paletaCrema && ammount < oneScoop){
    let change = ammount - oneScoop
    alert(`comprate paletaCrema,  ${paletaCrema} and your change is ${change}`)
}

else if (ammount >= oneScoop && ammount < twoScoop){
    let change = ammount - oneScoop
    alert(`comprate oneScoop,  ${oneScoop} and your change is ${change}`)

}

else if (ammount >= twoScoop && ammount < threeScoop){
    let change = ammount - twoScoop
    alert(`comprate twoScoop, ${twoScoop} and your change is ${change}`)
}

else if (ammount >= threeScoop && ammount < toppings ){
    let change = ammount - threeScoop
    alert(`comprate threeScoop, ${threeScoop} and your change is ${change}`)
}

else if (ammount >= toppings && ammount >= pint){
    let change = ammount - (toppings || pint)
    alert(`you have enough for either toppings, ${toppings} or pint, ${pint} and your change is ${change}`)
}
else {
    alert ('you have not enough dough')
}
*/

// ARRAYS inside arrays are elements and position starts from zero and not from 1.
// EX element one is horchata.  but any DATA can be stored into it.
/*
aguas = ['mango', ' horchata', ' piñaColada ', ' jamaica', ' guayaba']; 

document.write(aguas[2]) //piñaColada, which we are calling the data in position two. 

//Calculating Average Acceleration from Two Velocities- in array 

formula = ['Acceleration', 'diameter', 1979, 'Direccion'] //0,1,2,3

document.write(formula[3 ]) //Direccion
Direccion:{
    let direccion= ('Ojuelos 40')
    document.write('Mi ', direccion, 'es ')
};

document.write(`naci en ${formula[2]} ,`)

document.write(formula[ 1]) //diameter
diameter:{
    Math.PI
    let diametro = prompt('please enter circles diameter')
    const area = (Math.pow(diametro, 2)) * Math.PI
    document.write('Me mide ', area, ' ')
};

document.write(formula[0]) //Acceleration
Acceleration:{
    let VF = prompt('please enter final velocity')
    let SV = prompt('please enter starting velocity')
    let Ft = prompt('please enter final time')
    let It = prompt('please enter starting time')
    acceleration = (VF - SV) / (Ft - It)
    document.write(' y el word record ', acceleration, ' ')
};
*/
/*
//other array form
let PC = {
    nombre : 'paco', 
    procesador: '8-core CPU with 4 performance cores and 4 efficiency cores',
    battery: 'Built-in 58.2-watt-hour lithium-polymer battery',
    ram : '16GB',
    space: '512GB, 1TB, or 2TB',
    wireless: 'Bluetooth 5.0 wireless technology',
    camera: '720p FaceTime HD camera',
}

let nombre = PC ['nombre'];
let procesador = PC['procesador'];
let ram = PC['ram'];
let space = PC['space']; 
let battery = PC['battery'];
let wireless = PC['wireless'];
let camera = PC['camera']; 

//document.write(PC ['ram']);
//document.write(PC ['nombre'])

//let PC2 = [nombre = 'paco', 'intel core i7', '16gb', space = '1tb' ]
//document.write(PC2[3])

frase = `* nombre de mi PC es : <b> ${nombre} </b><br>
        *processador : <b> ${procesador} </b><br>
        * ram : <b> ${ram} </b><br>
        * space : <b> ${space} </b><br>
        * battery : <b> ${battery} </b><br>
        * wireless : <b> ${wireless} </b><br>
        * camera : <b> ${camera} </b><br>
        `;
document.write(frase);
*/
/*
//while

let num = 0;

while (num < 10) {
    num++;
    document.write(num + '<br>') //writes 12345678910
}

let num2 = 0
while (num2 <= 10) {
    num2++;
    document.write(num2 + '<br>') //writes 1234567891011
}

//do - while

let num3 = 0;
do {
    document.write(num3 + '<br>'); //writes 123456789 
    num3++;
}
while (num3 <10);

// 

let numero = 0;
while (numero < 1000){
    numero++;
    document.write(numero);
    if(numero == 10){
        break;
    }
}
*/
//for-i, for-of get excecuted the ammout of time we told it, assign it which is different from do-while as /////continues indefenetly,    for (){} //form  
//i for increment 
/* example only
we assign i and value it 20
let i = 20; 

then inside here, i value is 0 then inside block. como si estuvieran en different levels, have no efftect. to a point.. 
for (let i = 0) {

}

for (var i = things.length -1 ; i>=0; i--){
    things[i]
}
*/

//back to course for-i is composed of 
/*
*declaracion 
*condicion 
*iteracion(aumento - decremento)

for (let i = 0; i>6; i++)

*/
/*
let i = 20;

for (let i=0; i<=6; i++){           // i<=6 prints to six but,  i<6 only prints to 5.
    document.write (i + '<br>')
}

for (let z=6; z>0; z--){            //reverse of top
    document.write (z + '<br>')
}

document.write(i); //should be 20 as value i in for , only changes while inside
*/
//for-in and for-of 

let employees = ['empleado_uno', 'empleado_dos', 'moreno', 'solis',];

let empleado_uno = {
    nombre : 'peter',
    badgeID :'5304',
    ssn : '555 66 99', 
    hired : '1/2/2019', 
    insurance : 'silver', 
    bonus : 'yes', 
    increment : 'meeting',
};
let empleado_dos = {
    nombre: 'paco',
    badgeID: '5569',
    ssn: 'none, other nationality',
    hired: '8/25/2015',
    insurance: 'yes',
    bonus: 'yes',
    increment: 'auto 20% yearly',
};


let nombre = employees['nombre'];
let badgeID = employees['badgeID'];
let ssn = employees['ssn'];
let hired = employees['hired'];
let insurance = employees['insurance'];
let bonus = employees['bonus'];
let increment = employees['increment'];



for (employee of employees){
    document.write(employee+ '<br>');
};

for (employee in employees){
    document.write(employee + '<br>' )
}

//document.write(PC ['ram']);
//document.write(PC ['nombre'])





//document.write(PC ['nombre'])
