//1.45pm
//alert('codigo2');  
//num1 = 5;
//num1++;
//num1 = -num1 //neg sign to turn it into a neg number 
//document.write(num1);
/*
//  CONCAT //
saludo = 'hola paco, '; 
pregunta = 'como estas?'; 
frase = saludo + pregunta; 
document.write (frase); 

nombre = 'paco'; 
frase = `si, hola. yo soy ${nombre} y estoy aqui, estudiando`

document.write (frase); 

numero = 25; 
numero2 = 36; 
numer = 25; 
num = 'twentyfive';
document.write (numero == numero2); 
document.write (numero == numer); 
document.write(numero == num);
document.write( numero === numer);
*/

/*datos = 'string, number, boolean, undefined, null, nan, ';
alert(datos);

string = "cadena de texto";
number = 19;
booleano = false

let numero
numero = 5
alert(numero)

let otracosa = 10
alert(numero + otracosa)
*/
/*
Math.PI
let diameter = prompt('please enter circles diameter')
const area = (Math.pow(diameter, 2)) * Math.PI
alert (area)
*/
/*
//to get 25 you have to comment out //num5--; and //alert (resultado); in alert num3
let num5= 5
let num10 = 10
//num5--;
resultado = num5 + num10;
//alert (resultado);
num3 = num5**2
alert(num3)
//for increments ++, **, -- and more you have to assign it and the show it for value to work
num3++
alert(num3)
*/
//remainder is % in dalton tutorial he used & with numbers 10&5 = 0 which in mozzilla is also 0
//in mozzila & is The bitwise AND operator (&) returns a 1 in each bit position for which the corresponding /////bits of both operands are 1s (unos). they test it with 14&9 and result is 8. 

/*numero1 = 14
numero2 = 9
numero3 = 10        //binary value 0000000000001010
numero4 = 5         //             0000000000000101    there is no matching 1s between 10&5 so = 0
leftover = numero1&numero2;
resultado = numero1%numero2;
dalton = numero3&numero4;
alert(leftover)
alert(resultado)
alert(dalton)
*/
/*let con = '53'
let cat = 8
let frase = con.concat(cat)
document.write(frase)
*/
/*
let frase = 'We cross our bridges when we come to them and burn them behind us, '
let frase2 = ' with nothing to show for our progress except a memory of the smell of smoke, '
let frase3 = 'and a presumption that once our eyes watered. '
let author = 'Tom Stoppard'
//prints the same, phrase and author
document.write (frase+frase2+frase3+'Writen by' + author)
document.write(`${frase} ${frase2} ${frase3} Writen by ${author}`)

//let verdad = prompt('please enter a numero')
//let falso = prompt('please enter another numero')
let num = prompt('please enter a numero')
let txt = prompt('please write a numero')
//alert(verdad == falso);
*/
/*if (verdad == falso){
    alert(`nums entered, ${verdad} and ${falso} are equalE`)
}
if (verdad != falso) {
    alert(`nums entered, ${verdad} and ${falso} are NOT equalE`)
}
if (verdad === falso) {
    alert ( `${verdad} and ${falso} are StrictlY equalE`)
}
*/
/*
if (num === txt) {
    alert (`${num} and ${txt} arE strictly the SAME`)
}
if (num == txt){
    alert (`${num} and ${txt} are NOT StrictlY eQualE`)
}
if (num !==  txt) {
    alert (`${num} and ${txt} are differente`)
}
*/


//STRICTLY ===,  !== are important, they do make a difference. from the normal !=, ==
/*
let valor = true
let balor = true
let resultado = (valor && balor) // true
let resultado2 = (valor || balor)
let resultado3 = (valor)
document.write(resultado)

//concat is a chain method and one has to be a string, tried it with BOTH numbers and did not work
kon = '6'
Kat = 9
KonKat = kon.concat(Kat)
document.write(KonKat)

gon = ' paco '
gat = 'me duele la espalda'
document.write(` Hola, soy ${gon} y ${gat}` )

//best way is to use backticks and ${}
document.write(" Que changos? soy " + gon +
"y " + gat)

//backticks are a dream, reazon this works

frase = `<div>
<h1> back </h1>
<h2> ticks </h2>
</div>
`;
//document.write is what puts it on screen
document.write (frase);
*/
/*
num = 10
num2 = 5

if ((num < num2) || (num == num2)) {
    document.write ('1st option comparin 5 and 10 if 5 lesser than 10. OR operands both ')
}
if ((num >= num2) || (num > num2)) {
    document.write (' 2nd option. num on left is greater than or num greater than num2')
}

//Calculating Average Acceleration from Two Velocities
let VF = prompt('please enter final velocity')
let SV = prompt('please enter starting velocity')
let Ft = prompt('please enter final time')
let It = prompt('please enter starting time')
acceleration = (VF-SV)/(Ft-It)
document.write(acceleration)
*/
/*
num1 = 6
num2 = 12
num3 = 24
num4 = 48
num5 = 96
op = (!(num5 < num1 && num1 < num4)) || (!(num5 <= num4) || num3 <= num2)
//this works. called blocks, wrapped in {}
if ( op != true){
    alert (`hola, ${op}`)
    document.write ('paco')
}
else {alert (` this op is ${op}`)}
*/



/* prolem B
lottery ticket
*if has enough buys X1
*if has enough buys X2
*if has enough buys X3 and gives away change if there is change
* has to show what was bought and the change if any
*/

/* problem C
*if lying gets charged
* if not lying no charged
* question needs to be clearer
*/








