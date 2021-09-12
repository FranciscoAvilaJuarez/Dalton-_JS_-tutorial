
//      CLASSES CAN     N   O   T     HAVE THE SAME     N   A   M   E   
// ejempl0
//        class ANIMAL
//                    and
//                       let ANIMAL = x

class ANIMAL {      //open ANIMALC
    constructor(nombre, especie, edad, color){      //passing values. 
        this.name = nombre; 
        this.raza = especie;  
        this.edad = parseInt(edad);     //passes a number
        this.color = color;
        this.info = `me llamo ${this.name} soy un ${this.raza} con ${this.edad}yrs de color ${this.color}<br>`; 
    }
    verInfo(){      //open METODO to see info 
        document.write(this.info + "<br>");
    }       //close METODO to see info 
}       //close ANIMALC


//  H   E   R   E   N   C   I   A       primero va la NUEVA y DESPEUES de donde viene. 
class PERRO extends ANIMAL {        //open PC E A
    constructor( nombre, especie, edad, color, size ){        //open cons
        super( nombre, especie, edad, color, size ); 
        this.tamaño = size; 
    }//close cons
    ladrar(){       //open ladrarF
        document.write('yo si ladro'); 
    }//ladrarF
}//close PC E A



//enters values. 
let perro = new PERRO( 'osito', 'perro', 10, 'negro', 'grande' );      //grande is the herencia
let gato = new ANIMAL( 'garfield', 'gato', 5, 'stripped meow orange' ); 
let bird = new ANIMAL( 'heloo', 'bird', 3, 'green' ); 


// con esto ves:
//              me llamo ${this.name} soy un ${this.raza} con ${this.edad}yrs de color ${this.color}
perro.verInfo(); 
gato.verInfo(); 
bird.verInfo(); 


//      yo si ladro     probando HERENCIA
perro.ladrar();      