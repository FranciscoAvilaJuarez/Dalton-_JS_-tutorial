/*
function saludar(){
    alert ('hola');     //what is doing
    return 'tu madre';      //what is returning. but it STOPS/ends at return. (if we had return and then alert, alert would never run)
}
let saludo = saludar();     //vaue of saludo is 'tu madre' and i was missing () earlier and was getting the actual text  
document.write(saludo);     //as we can see here, the value of saludo
*/

//let num1 = 32;      //commenting out to automate. SEE NOTE1
//let num2= 12;


//let res = num1 + num2;

//document.write (res); 
/*
function suma (num1, num2){       //CREATE the function       NOTE1 ADDED num1 and num2 inside parenthesis see NOTE2
    //if(isNaN(num1)){
        ///if(isNaN(num2)){
            parseInt(num1);     //parseInt turns string into number to make sure is a number
            parseInt(num2);
            let sum = num1 + num2;
            document.write(sum + '</br>');
        //}
    //}
    //else {
    //    document.write('not a number'); 
    //}
}
suma(12,32);     //CALL IT.      NOTE2 here i provide values

//anhter example 

let frase = 5;      //to prove global value and local value in ln37 
const saludo = function(nombre){
    let frase = `hola, ${ nombre} como estas`;       //adding let to frase turns it into a local variable 
    document.write (frase + '</br>'); 
}
saludo ('paco');        //call it and gives us: hola, paco como estas
document.write(frase);      //writes 5, as the value in ln35 and not 37 
*/

// arrow functions, 


//const saludo = function(nombre)    {    //delete 'function' behind and add '=>' in front of THE parenthesis()//const saludo =         (nombre) => {
/*
const saludo = (nombre) => {
        let frase = `hola, ${ nombre} como estas`;       //adding let to frase turns it into a local variable 
        document.write (frase + '</br>'); 
}
saludo('ale')

*/
//otro ejemplo seria 

// we went from this: 
const saluder = function(nombra){
    let frase = `hola, como estas_${nombra}?`; 
    document.write (frase + '</br>'); 
}
saluder ('pedre');        //call it and gives us: hola, como estas_pedre?


//to this:      just because the arrow function.
const saludar = nombre => document.write(`hola, como estas ${nombre}? '</br>'`); 
saludar ("pedro");        //gives us: hola, como estas_pedro?    
//if it doesnt work change for 'hola, como estas_' + nombre + '?' + '</br>'
