//hace something con students
/*
*registrar 19 students que esten presentes (P)
*registrear students que esten ausentes (A)
*save 30 days of student info
*show the 30 days of final situation, of all students, number of present (P) and ausentes (A)
*if over 10% (A) per semester = reprobado
*/

//let estudiante = prompt('decime tu nombre'); //pedimos el nombre
let cantidad = prompt('cuantos alumnos son?'); 

let totalStudent = []; //creamos lugar para poner lista, la 'i'. 

//
for (i=0; i < cantidad; i++){
    totalStudent[i]= [prompt( 'students name'+ (i+1)),0];  //ask 4 students name and store it in 'i'
    //'0' es la cantidad de precencias (we calling  pos 1 and then pos 0) student, numero de precencias.

    
}  

//pedir nombre y la position en la lista '(nombre y p) '
/*
arrow function exp. 

*/
const tomarLista = (nombre, p) => { 
    let precencia = prompt(nombre);       //nombre, presente o ausente 

    if (precencia == 'p' || precencia == 'P'){      //'p' chiquita O 'P' GRANDE
        totalStudent[p][1]++;

    }
    

}

//let days = prompt('how many days?'); no worky

//try to use 'Array.prototype.forEach()' for this instead of 'for-in' as ORDER IS RANDOM WITH for-in
//try to replace this 'alumno.foreach(function(alumno))' for '(i = 0; i <30; i++)'
// or for 'for-of'
 for (i = 0; i < 10; i++){       // totalStudent.forEach((alumno) =>{} )
        //30 for the number of days. alumnos totales is not days, changed it to days to see if it works...remember days, not  30 
    for (alumno in totalStudent) {     // originally waas 'for-in'

        //
        tomarLista(totalStudent[alumno][0], alumno);       //alumnosTotales por que es de 'of'. alumno (o indice) OF PASA EL VALOR, AQUI QUEREMOS LA POSICION. CHANGED BACK TO 'FOR-IN'    
    }
};
/*
va a ser, 
totalStudent has nombre y numero de assistancias (precencia?)  
so i es el segundo elemento ADENTRO DEL NOMBRE COMO.. (PACO[#PRECENCIAs]) 
EN 
totalStudent[i][1]++;  'i' es paco y '1' es PRECENCIAs 
i = [0, 1, 2, 3]
*/

//mostrar situacion final, #precencia/aucentes, if auencia over 10% then fail
//  ':<br>' es el html tag for break here
for (alumno in totalStudent){       //<!-- HERE GOES 30 INSTEAD OF days -->   
    let resultado = `${totalStudent[alumno][0]}:<br>                
    _____Presentes: ${totalStudent[alumno][1]}<br>
    _____Aucentes: ${10 - totalStudent[alumno][1]}`;  //con '[alumno[1]])}' salia NaN. 

    if(10 - totalStudent[alumno][1] > 3){        // 30 - totalStudent[alumno][1] > 18 
        resultado+= "<b style= 'color: red'> REPROBADO WEON, POR FALTAS </b> <br><br>"
    }else{
        resultado+= "<br><br>"
    }    
    document.write(resultado);     
}
