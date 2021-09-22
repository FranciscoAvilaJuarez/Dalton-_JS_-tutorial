/*
//function to return
    *profesor assignado 
    *nombre de los alumnos 
*funtion to return how manay classes pater has
* name of those clases and teachers

*ask which class to take
    if 20+ denied inscription
    else +20 incribirlo and add student to list. 
*/
const obtenerInformacion = (materia)=>{
    materias = {
        fisica : ['Joel', 'pater', 'comunitaris', 'fer'],
        programacion : ['Marco', 'pater', 'comunitaris', 'paco'],
        logica : ['Neto', 'pater', 'paco', 'maria'],
        quimica : ['Juanito', 'pater', 'comunitaris'], 
        math : ['Joel', 'pater', 'comunitaris', 'paco', 'fer'],
    }
    if (materias[materia] !== undefined){//if materia is NOT defined
    return [materias[materia], materia, materias];//quiero alumnos en la materia, la materia  
    }else { return materias;}
}

const showInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia); 
    console.log(informacion);
    if (informacion !== false){ //si info no es falsa  
        let teacher = informacion[0][0];//teacher = class obtener info/fisica/
        let alumnos = informacion[0]; 
        alumnos.shift();   
        //informacion[0] = the names inside fisica informacion[1] = fisica
        document.write(`
        <b> Clase </b> : <b style='color:#FF0000'> ${informacion[1]} </b> <br>
        <b style='color:#0000FF'> Maestro </b> : <b style='color:#FF0000'> ${teacher} </b> <br>
        <b> Alumnos </b> : <b style='color:#FF0000'> ${alumnos} </b><br><br>`);
    };
};
//*funtion to return how manay classes pater has
const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = []; 
    let cantidadTotal = 0;
    for(let info in informacion){
        //document.write(`${info}_<br>`);         
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(' '+ info);   
        };
    };
    return `
    <b>Student</b> : <b style='color:#FF0000'> ${alumno} </b><br>
    <b># Couses enrolled</b> : <b style='color:#FF0000'> ${cantidadTotal} </b><br> 
    <b>Coursos</b> : <b style='color:#008000'> ${clasesPresentes} </b> 
    <br><br>`;
};  
//call to show info
showInformacion('fisica'); 
showInformacion('programacion'); 
showInformacion('logica'); 
showInformacion('quimica');

document.write(cantidadDeClases('pater')); 
document.write(cantidadDeClases('comunitaris')); 
document.write(cantidadDeClases('paco')); 
document.write(cantidadDeClases('fer')); 
document.write(cantidadDeClases('maria'));

