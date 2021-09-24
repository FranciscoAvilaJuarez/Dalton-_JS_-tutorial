/*
*students needs 90% assistance to pass 
*average in class = 7+/10
*75% homework turned in

-ask for data for pass/fail
-show this in color in console
-estructrured in table form
*/

//THIS IS AN ARRAY ASSOCIATIVO  
const materias = {
    fisica : [90, 7, 4, 'fisica'],  //assistencia%, promedio, work%  1, 2 is 50%, 3, 4 is 100%, 'fisica' 
    math : [82, 6, 2, 'math'],
    logica : [79, 7, 4, 'logica' ],
    calculo : [82, 6, 4, 'calculo' ],
    programacion : [90, 7, 4, 'programacion' ],
}

//validar 90% ass - pass 
const assistencia = () => {
    for (materia in materias){
        let assistencias = materias[materia][0];// materias/assistencia%   *note: 90 in fisica
        let promedio = materias[materia][1];//promedio = materias/promedio  *note: 7 in fisica
        let trabajos = materias[materia][2];// trabajos = materias/work%  1, 2 is 50%, 3, 4 is 100%   *note: 4 in fisica

        if (assistencias >= 90){
            console.log(`${materias[materia][3]}`);//materias[materia][3] is the course inside array materias
            console.log('%c Approbado en assistencias', 'color:green');// '%c' is the course 
        }else{
            console.log(`${materias[materia][3]}`);//materias[materia][3] is the course inside array materias
            console.log('%c DesApprobado en assistencias', 'color:red');// '%c' is the course 
        }
        if (promedio >= 7){
            console.log('%c Promedio en orden', 'color:green'); 
        }else{
            console.log('%c La gran chucha en promedio', 'color:red'); 
        }
        if (trabajos >= 3){
            console.log('%c Trabajos en order', 'color:blue'); 
        }
        else{
            console.log('%c HueOn en trabajos', 'color:red'); 
        }
    }
}
//call it 
assistencia('fisica'); 

