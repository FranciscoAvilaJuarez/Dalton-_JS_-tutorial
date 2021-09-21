//add new functions to calculator
//potencias, raices cuadradas y cubicas

//class summar 
class sumar {
    constructor (num1, num2){
        let sum = parseInt(num1) + parseInt(num2);    
        return sum; 
    }
}
sum = new sumar();      //initialize class with 'new'

//class resta
class substract {
    constructor(num1, num2){
        let resta = parseInt(num1) - parseInt(num2); 
        return resta; 
    }
}
resta = new substract();        //to call class we have to use 'new' to initialize it

//class dividir
class divicion {
    constructor(num1, num2){
        let divide = parseInt(num1) / parseInt(num2) 
        return divide;
    }
}
divide = new divicion();        //to call class divicion


//preguntar que vamos a hacer 
let operacion = prompt(`que operacion, hoy? 1: suma, 2: resta, 3: divide, 4: multiplica`)
// if going to add 
if (operacion == 1){
    
    //llamando clase sumar
    sum = new sumar(); 
    
    //display resultado de suma
    alert (` el resultado de tu operacion, ${num1} + ${num2} es igual a ${sum}`);
}
//if going to restar
else if (operacion == 2) {
    let num1 = prompt('first number to restar'); 
    let num2 = prompt('second number to restar'); 
    
    resta = (num1, num2); 
    //resultado = substract(num1, num2); 
    alert (` el resultado de tu operacion, ${parseInt(num1)} - ${parseInt(num2)} es igual a ${resta}`);
}
//if going to divide
else if (operacion == 3) {
    let num1 = prompt('first number to conquer'); 
    let num2 = prompt('second number to conquer'); 
    
    divide = (num1, num2); 
    //resultado = divide(num1, num2); 
    alert (` el resultado de tu operacion, ${parseInt(num1)} / ${parseInt(num2)} es igual a ${divide}`);
}
//if going to multiply
//multiplicar object; 
else if (operacion == 4 ){
    let num1 = prompt('first number to multiply');
    let num2 = prompt('second number to multiply'); 

    object.multiplicar = parseInt(num1) * parseInt(num2);
    alert (object.multiplicar)
}
//ANYTHING ELSE
else {
    alert('was not able to find opt, ponchaos'); 
}











