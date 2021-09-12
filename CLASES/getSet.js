


class ANIMAL {      //open ANIMALC
    constructor(nombre, especie, edad, color){      
        this.name = nombre; 
        this.especie = especie;     //SET changed to especie in white, 'raza' was NOT working
        this.edad = parseInt(edad);    
        this.color = color;
        this.info = `me llamo ${this.name} soy ${this.especie} con ${this.edad}yrs de color ${this.color}<br>`; 
    }
    verInfo(){      //open METODO to see info 
        document.write(this.info + "<br>");
    }       //close METODO to see info 
}       //close ANIMALC


class PERRO extends ANIMAL {        //open PC E A
    constructor( nombre, especie, edad, color, size ){        //open cons       STEP2 ADD IT
        super( nombre, especie, edad, color, size );            //STEP3 PASS IT 
        this.especie = null;        //again pass especie but null it to change it       STEP3 NULL THE CURRENT
    }//close cons
    set changeEspecie(newEspecie){      //added the SET to make changes     //STEP4 ADD SET 'METHOD'
        this.especie = newEspecie;          //made change       //STEP5 ASSIGN NEW VALUE FROM STEP1 
    }//ladrarF
}//close PC E A

//enters values. 
const perro = new ANIMAL('osito', 'perro', 5, 'stripped meow orange', )
const gato = new ANIMAL( 'garfield', 'gato', 5, 'stripped meow orange' ); 
const bird = new ANIMAL( 'heloo', 'bird', 3, 'green' ); 


perro.changeEspecie = 'lobo'        //step one, make change to 'lobo' FROM perro (s1 for changes to take place)
document.write(perro.especie)       //STEP6 PRINT OUT NEW VALUE lobo

/*

//  probing static, always running'on' 
//      as calling  CLASS with out 'initializing'
PERRO.ladrar();     
// writes 'yo si ladro' with  document.write('yo si ladro' + "<br>"); 
//writes 'undefined' with  document.write(this.nombre + "<br>");  as is NOT passing thru ANIMAL 

*/