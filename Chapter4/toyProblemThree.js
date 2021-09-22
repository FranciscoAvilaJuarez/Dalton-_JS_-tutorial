let materias = {
        fisica : ['Joel', 'pater', 'comunitaris', 'fer'],
        programacion : ['Marco', 'pater', 'comunitaris', 'paco'],
        logica : ['Neto', '1pater', '2paco', '3maria'],
        quimica : ['Juanito', 'pater', 'comunitaris'], 
        math : ['Joel', 'pater', 'comunitaris', 'paco', 'fer'],
} 

const inscribir = (alumno, materia)=>{
        personas = materias[materia];//personas = materias[cual course] 
        personas = personas;//NOW personas tiene SOLO los personas...
        if (personas.length -1 >= 10){
                document.write(`lo siento <b>${alumno}</b>, clase : <b>${materia}</b> esta llena <br>`)
        }else{
                personas.push(alumno); 
                if(materia == 'fisica'){
                        materias = {
                                fisica : personas,
                                programacion : materias['programacion'],
                                logica : materias['logica'],
                                quimica : materias['quimica'],
                                math : materias['math']
                        }
                }
                else if(materia == 'programacion'){
                        materias = {
                                fisica : materias['fisica'],
                                programacion : personas,
                                logica : materias['logica'],
                                quimica : materias['quimica'], 
                                math : materias['math']
                        }
                }
                else if(materia == 'logica'){
                        materias = {
                                fisica : materias['fisica'],
                                programacion : materias['programacion'],
                                logica : personas,
                                quimica : materias['quimica'], 
                                math : materias['math']
                        }
                }
                else if(materia == 'quimica'){
                        materias = {
                                fisica : materias['fisica'],
                                programacion : materias['programacion'],
                                logica : materias['logica'],
                                quimica : personas,
                                math : materias['math']
                        }
                }
                else if(materia == 'math'){
                        materias = {
                                fisica : materias['fisica'],
                                programacion : materias['programacion'],
                                logica : materias['logica'],
                                quimica : materias['quimica'], 
                                math : personas
                        }
                }
                document.write(`<b>congrats</b>, ${alumno} te has inscrito a : ${materia}<br>`);
        }
}

document.write(materias['logica'] + '<br>'); 
inscribir('4kris','logica'); 
inscribir('5kris','logica');
document.write(materias['logica'] + '<br>'); 
inscribir('6kris','logica'); 
inscribir('7kris','logica'); 
inscribir('8kris','logica'); 
inscribir('9dalto','logica'); 
inscribir('10maro','logica'); 
inscribir('11Maro','logica'); 
inscribir('12nando','logica'); 
inscribir('13Nando','logica'); 
document.write(materias['logica'] + '<br>'); 