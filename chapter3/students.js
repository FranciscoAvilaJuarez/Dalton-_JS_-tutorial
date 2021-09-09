//hace something con students
/*
*registrar 19 students que esten presentes (P)
*registrear students que esten ausentes (A)
*save 30 days of student info
*show the 30 days of final situation, of all students, number of present (P) and ausentes (A)
*if over 10% (A) per semester = reprobado
*/

let estudiante = prompt('decime tu nombre'); //pedimos el nombre
let totalStudent = []; //creamos lugar para poner lista

for (var i=2; i<cantidad; i++){
    totalStudent[i]= [estudiante + 1,0]; 
}  