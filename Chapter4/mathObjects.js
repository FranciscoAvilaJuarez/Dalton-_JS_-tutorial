                                                                                //  document.write(`'${}'`);
                                                                                //  <b>  <br>
                                                                                //  *filter()
                                                                                //  style='color:#FF0000'
//math Objects 
document.write(`<b style='color:#FF0000'> math Objects </b><br>`);


//  sqrt() *eleva al Cuadrado
document.write(`<b style='color:#FF0000'>sqrt() *eleva al Cuadrado</b><br>`);
let numeroCuadrado = Math.sqrt(25); 
document.write(`la raiz cuadrada de 25 : '${numeroCuadrado}'<br><br>`);//5  as 5x5=25 

//  cbrt() *eleva al Cubo
document.write(`<b style='color:#FF0000'>cbrt() *eleva al Cubo</b><br>`);
let numeroCubico = Math.cbrt(27); 
document.write(`la raiz cubica de 27 : '${numeroCubico}'<br><br>`);//3 as 3x3=9x3=27

//  min() *provides smaller number 
document.write(`<b style='color:#FF0000'>min() *provides smaller number</b><br>`);
numMin = Math.min(1,2,3,4,5,6,7,8,9,10);
document.write(`el numero min es : '${numMin}'<br><br>`);

// max() *provides biggest number
document.write(`<b style='color:#FF0000'>max() *provides biggest number</b><br>`);
numMax = Math.max(10,2,3,4,5,6,7,8,9,1);
document.write(`el numero max es : '${numMax}'<br><br>`);

//random() *provides random number
document.write(`<b style='color:#FF0000'>random() *provides random number</b><br>`);
numRandoom = Math.random()*100; 
document.write(`Random number zero to one hundred : '${numRandoom}'<br>`);
numRandoom = numRandoom.toString();//makes random number whole and also makes it show 
num = numRandoom[0] + numRandoom[1]; 
if (numRandoom[1] == '.'){
    numRandoom[1] = numRandoom[0];
};
document.write(`adding <b style='color:#FF0000'>toString()</b> is how we can get the random number on here : <b>'${num}'</b> but <b style='color:#FF0000'> toString() </b> is  also making number <b>whole</b><br><br><br>`);
//
//document.write(`'${}'`);


//round() **en vez de hacer lo de arriba
document.write(`<b style='color:#FF0000'> *Round() **en vez de hacer lo de arriba but provides round number </b><br>`);
let numeroRound = Math.random()*100; //from (anything) to 100
numeroRound = Math.round(numeroRound);//el  numero es igual a el numero redondeado
if (numeroRound[1] == '.'){
    numeroRound[1] = numeroRound[0];
};
document.write(`round number zero to one hundred : '${numeroRound}'<br><br>`); 


//floor() **also does kinda the same but ROUNDS DOWN
document.write(`<b style='color:#FF0000'> *Floor() **also does kinda the same but ROUNDS DOWN the number </b><br>`);
let numeroFloor = Math.random()*99;//to one hundred but to prevent zero from showing change to 99 AND 
numeroFloor = Math.floor(numeroFloor + 1);//AND add one here
document.write(`round down number from zero to one hundred(99+1) : '${numeroFloor}'<br><br>`);
// to test one and onehundred show
document.write(`<b> *Ran function loop 1K times </b><br>`);
for (var i = 0; i<1; i++){
    let numLoop = Math.random()*100; 
    numLoop = Math.floor(numLoop + 1); 

    document.write(`numero : '${numLoop}'<br>`);
}; 
document.write(`<br><br>`);

//fround() *returns la representancion flotante de precicion mas simple close to the number
document.write(`<b style='color:#FF0000'> fround() *returns la representancion flotante de precicion mas simple (4bytes) close to the number</b> <b>(it just shows a simpler number)
</b><br>`);
let numeroFround = Math.random()*100;
numeroFround = Math.fround(numeroFround + 1); 
document.write(`fround number 1 to 100`);
document.write(`this is numero fround : '${numeroFround}' a four byte 'simpler' number<br><br><br>`);
//fround number 23.34168815612793


//trunc() 
document.write(`<b style='color:#FF0000'> trunc()     *devuelve la parte entera del numero (removes fractions) </b><br>`);
let numTrunc = Math.random()*100;
numTrunc = Math.trunc(numTrunc); 
document.write(`the fractions are removed : '${numTrunc}'<br><br><br>`);

let numPi = Math.PI; 
document.write(`<b style='color:#FF0000'>*El PI number : '${numPi}' </b><br>`);
numPi = Math.fround(numPi); 
document.write(`<b style='color:#FF0000'>*El PI number :_${numPi} _'fround version'</b><br><br><br>`);


//SQRT1_2  *
let numSQRT1_2 = Math.SQRT1_2; 
document.write(`<b style='color:#FF0000'> 
*La representacion flotante mas cercana : '${numSQRT1_2}'
</b><br>`);

//SQRT2
let numSQRT2 = Math.SQRT2; 
document.write(`<b style='color:#FF0000'>
*La raiz cuadrada de dos : '${numSQRT2}' con Math.SQRT2
</b><br>`);
let cuadro = 1.4142135623730951 * 1.4142135623730951; 
document.write(`<b style='color:#FF0000'> *La raiz cuadrada de dos : '${cuadro}'</b><br><br><br>`);


//  E  **la constante de euler * base de algoritmos naturales
let  EulersNumber = Math.E; 
document.write(`<b style='color:#FF0000'> *e (mathematical constant) base de algoritmos naturales : '${EulersNumber}'</b><br><br>`);

//  LN2  *logaritmo natural de dos
let numLn2 = Math.LN2; 
document.write(`<b style='color:#FF0000'> *LN2,  logaritmo natural de dos : '${numLn2}'</b><br><br>`);

//  LN10
let numLn10 = Math.LN10; 
document.write(`<b style='color:#FF0000'> *LN10,  logaritmo natural de diez : '${numLn10}'</b><br><br>`);

//LOG2E
let numLog2e = Math.LOG2E;  
document.write(`<b style='color:#FF0000'> *LOG2E,  logaritmo de E(euler) con base 2 : '${numLog2e}'</b><br><br>`);

//LOG10E
let numLog10e = Math.LOG10E; 
document.write(`<b style='color:#FF0000'> *LOG10E,  logaritmo de E(euler) con base 10 : '${numLog10e}'</b><br><br>`);
