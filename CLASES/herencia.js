
class animal {
    constructor(nombre, especie, edad, color){
        this.name = nombre; 
        this.raza = especie;  
        this.edad = parseInt(edad);
        this.color = color;
        this.info = `me llamo ${this.name} soy un ${this.raza} con ${this.edad}yrs de color ${this.color}<br>`; 
    }
    verInfo(){
        document.write(this.info);
    }
    
}
// SE LLAMA FUNCION AFUERA, const saludar =()=>{ alert  } 


let perro = new animal( prompt('cual es su nombre?'), 'perro',10 , 'bonito' ); 
let gato = new animal( 'garfield', 'gato', prompt('cuanto años tiene?'), 'stripped meow' ); 
let bird = new animal( 'heloo', 'bird', 3, prompt('cual es su color?') ); 


/*
            TODO ESTO SE PUEDE HACER 
document.write (perro.raza, '<br>');        //resultado husky
document.write (perro.especie, '<br>');     //resultado undefined
document.write(perro.info, '<br>'); 
document.write(gato.info, '<br>'); 
document.write(bird.info, '<br>');
*/
//      con esto 'perro.verInfo();' y 'verInfo(){document.write(this.info)}'
perro.verInfo(); 
gato.verInfo(); 
bird.verInfo(); 

//      polimorfismo  ALMOST same info, diferent resutado.  
perro.ladrar(); 
gato.ladrar();
bird.ladrar(); 