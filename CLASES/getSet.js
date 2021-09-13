


class ANIMAL {      //open ANIMALC
    constructor(nombre, ezpecie, edad, color){      
        this.name = nombre; 
        this.ezpecie = ezpecie;     //SET changed to ezpecie in white, 'raza' was NOT working
        this.edad = parseInt(edad);    
        this.color = color;
        this.info = `me llamo ${this.name} soy ${this.ezpecie} con ${this.edad}yrs de color ${this.color}<br>`; 
    }
    verInfo(){      //open METODO to see info 
        document.write(this.info + "<br>");
    }       //close METODO to see info 
}       //close ANIMALC


class PERRO extends ANIMAL {       
    constructor( nombre, ezpecie, edad, color, size ){        //open cons       STEP2 ADD IT
        super( nombre, ezpecie, edad, color, size );            //STEP3 PASS IT 
        this.ezpecie = null;        //again pass ezpecie but null it to change it       STEP3 NULL THE CURRENT
    }//close cons
    set setEzpecie(newEzpecie){      //added the SET to make changes     //STEP4 ADD SET 'METHOD'
        this.ezpecie = newEzpecie;          //made change       //STEP5 ASSIGN NEW VALUE FROM STEP1 
    }//close SET
    get getEzpecie (){
        return this.ezpecie; 
    }
}//close PC E A

//enters values. 
const perro = new ANIMAL('osito', 'perro', 5, 'stripped meow orange', )
const gato = new ANIMAL( 'garfield', 'gato', 5, 'stripped meow orange' ); 
const bird = new ANIMAL( 'heloo', 'bird', 3, 'green' ); 


perro.setEzpecie = 'lobo';     //step one, make change to 'lobo' FROM perro (s1 for changes to take place)
document.write(perro.ezpecie + '<br>');        //STEP6 PRINT OUT NEW VALUE lobo
document.write(perro.getEzpecie); 
document.write(perro.ezpecie + '<br>');
console.log(perro.getEzpecie); 
console.log(perro.newEzpecie); 
/*

//  probing static, always running'on' 
//      as calling  CLASS with out 'initializing'
PERRO.ladrar();     
// writes 'yo si ladro' with  document.write('yo si ladro' + "<br>"); 
//writes 'undefined' with  document.write(this.nombre + "<br>");  as is NOT passing thru ANIMAL 

*/