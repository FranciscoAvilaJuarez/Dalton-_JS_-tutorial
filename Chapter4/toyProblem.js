//add new functions to calculator
//potencias, raices cuadradas y cubicas

class Calculadora {
        constructor(){
        };//close constructor
    //summar 
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);    
    };
    //resta
    substract(num1, num2) {
        return parseInt(num1) - parseInt(num2); 
    }; 
    //dividir
    divicion(num1, num2) {
        return parseInt(num1) / parseInt(num2); 
    }; 
    //multiplicacion
    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2); 
    };
    //exp 
    exponent(num1, expNum){
        return parseInt(num1) **parseInt(expNum);
    };
    //raiz cuadrada
    raizCuadrada (num1){
        return parseInt(Math.sqrt(num1));
    };
    raizCubica (num1){
        return parseInt(Math.cbrt(num1)); 
    };
};//close class 


//call class 
const calculadora = new Calculadora(); 


//preguntar que vamos a hacer 
let operacion = prompt(`
que operacion, hoy? 
 1 : suma, 2 : resta, 3 : divide, 4 : multiplica, 5 : exponencia, 6 : raiz caudrada, 7 : raizCubica
`);

let num1 = prompt(`enter number to perform '${operacion}' : `);//get first number

// if going to add 
if (operacion == 1){
    let num2 = prompt('second number to sumar'); 
    sumaResultado = calculadora.sumar(num1, num2);//sumar by calling class 
    alert(`la suma entre '${num1}' y '${num2}' es : '${sumaResultado}'`)
}
//if going to restar
else if (operacion == 2) {
    let num2 = prompt('second number to restar'); 
    restaResultado = calculadora.substract(num1, num2);//restar using class 
    alert (`la resta entre : '${num1}' y : '${num2}' es igual a : '${restaResultado}'`);
}
//if going to divide
else if (operacion == 3) {
    let num2 = prompt('second number to conquer'); 
    divideResultado = calculadora.divicion(num1, num2);//dividir using class 
    alert (` la divicion entre : '${num1}' y : '${num2}' es igual a : '${divideResultado}'`);
}
//if going to multiply
else if (operacion == 4 ){
    let num2 = prompt('second number to multiply'); 
    multiplyResult = calculadora.multiplicar(num1, num2);//multiply using class
    alert (`la multiplicacion entre : '${num1}' y : '${num2}' es : '${multiplyResult}'`)
}
//exponenciacion
else if (operacion == 5){
    let expNum = prompt('a que potencia?'); 
    let expResult = calculadora.exponent(num1, expNum); 
    alert(`'${num1}' a la '${expNum}' potencia es : '${expResult}'`);
}
//raices cuadradas
else if (operacion == 6){
    num1Resultado = calculadora.raizCuadrada(num1);
    alert(`la raiz caudrada de '${num1}' es : '${num1Resultado}'`);
}
//raices Cubicas
else if (operacion == 7){
    num1Resultado = calculadora.raizCubica(num1); 
    alert(`la raiz cubica de '${num1}' es : '${num1Resultado}'`);
}
//ANYTHING ELSE
else {
    alert('was not able to find operation'); 
}
  










