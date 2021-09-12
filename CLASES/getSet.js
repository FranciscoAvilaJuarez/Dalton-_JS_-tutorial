


class ANIMAL {      //open ANIMALC
    constructor(nombre, especie, edad, color){      //passing values. 
        this.name = nombre; 
        this.raza = especie;  
        this.edad = parseInt(edad);     //passes a number
        this.color = color;
        this.info = `me llamo ${this.name} soy ${this.raza} con ${this.edad}yrs de color ${this.color}<br>`; 
    }
    verInfo(){      //open METODO to see info 
        document.write(this.info + "<br>");
    }       //close METODO to see info 
}       //close ANIMALC

//  H   E   R   E   N   C   I   A       primero va la NUEVA clase y DESPEUES la clase de donde viene. 
class PERRO extends ANIMAL {        //open PC E A
    constructor( nombre, especie, edad, color, size ){        //open cons
        super( nombre, especie, edad, color, size ); 
        this.especie = null; 
    }//close cons
    changeEspecie(){       //open ladrarF con STATIC 
        this.especie = 'lobo'; 
    }//ladrarF
}//close PC E A

//enters values. 
const perro = new ANIMAL('osito', 'perro', 5, 'stripped meow orange', )
const gato = new ANIMAL( 'garfield', 'gato', 5, 'stripped meow orange' ); 
const bird = new ANIMAL( 'heloo', 'bird', 3, 'green' ); 


/*

//  probing static, always running'on' 
//      as calling  CLASS with out 'initializing'
PERRO.ladrar();     
// writes 'yo si ladro' with  document.write('yo si ladro' + "<br>"); 
//writes 'undefined' with  document.write(this.nombre + "<br>");  as is NOT passing thru ANIMAL 

*/