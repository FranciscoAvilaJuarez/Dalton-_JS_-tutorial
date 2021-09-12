
class animal {
    constructor(nombre, especie, edad, color){
        this.name = nombre; 
        this.raza = especie;     //instead of uing 'let especie' we use 'this.' (raza is to see diff in value)
        this.edad = parseInt(edad);
        this.color = color;
        this.info = `me llamo ${this.name} soy un ${this.raza} con ${this.edad}yrs de color ${this.color}<br>`; 
    }
    //Y METODO ADENTRO, ONLY EXIST INSIDE CLASS
    //this.verInfo = ()=>{ document.write(this.info)}  but arrow functions dont work inside classes. 
    //sigue siendo metodo como esta: 
    verInfo(){
        document.write(this.info);
    }
}
// SE LLAMA FUNCION AFUERA, const saludar =()=>{ alert  } 


let perro = new animal( prompt('cual es su nombre?'), 'husky',10 , 'bonito' ); 
let gato = new animal( 'garfield', 'fat', prompt('cuanto años tiene?'), 'stripped meow' ); 
let pajaro = new animal( 'heloo', 'cotorro', 3, prompt('cual es su color?') ); 


/*
            TODO ESTO SE PUEDE HACER 
document.write (perro.raza, '<br>');        //resultado husky
document.write (perro.especie, '<br>');     //resultado undefined
document.write(perro.info, '<br>'); 
document.write(gato.info, '<br>'); 
document.write(pajaro.info, '<br>');
*/
//      con esto 'perro.verInfo();' y 'verInfo(){document.write(this.info)}'
perro.verInfo(); 
gato.verInfo(); 
pajaro.verInfo(); 