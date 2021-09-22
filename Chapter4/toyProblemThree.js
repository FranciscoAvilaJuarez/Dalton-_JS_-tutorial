let materias = {
        fisica : ['Joel', 'pater', 'comunitaris', 'fer'],
        programacion : ['Marco', 'pater', 'comunitaris', 'paco'],
        solidWorks : ['Neto', 'pater', 'paco', 'maria'],
        quimica : ['Juanito', 'pater', 'comunitaris'], 
        math : ['Joel', 'pater', 'comunitaris', 'paco', 'fer'],
} 

const inscribir = (alumno, materia)=>{
        
        let personas = materias[materia];//personas = materias[cual course] 
        
        if (personas.length -1 >= 10){
                document.write(`<b style='color:#FF0000'> lo siento ${alumno}, clase : ${materia} esta llena 
                </b><br>`);
        }else{
                personas.push(alumno); 
                if(materia == 'fisica'){
                        materias = {
                                fisica : personas,
                                programacion : materias['programacion'],
                                solidWorks : materias['solidWorks'],
                                quimica : materias['quimica'],
                                math : materias['math']
                        }
                }
                else if(materia == 'programacion'){
                        materias = {
                                fisica : materias['fisica'],
                                programacion : personas,
                                solidWorks : materias['solidWorks'],
                                quimica : materias['quimica'], 
                                math : materias['math']
                        }
                }
                else if(materia == 'solidWorks'){
                        materias = {
                                fisica : materias['fisica'],
                                programacion : materias['programacion'],
                                solidWorks : personas,
                                quimica : materias['quimica'], 
                                math : materias['math']
                        }
                }
                else if(materia == 'quimica'){
                        materias = {
                                fisica : materias['fisica'],
                                programacion : materias['programacion'],
                                solidWorks : materias['solidWorks'],
                                quimica : personas,
                                math : materias['math']
                        }
                }
                else if(materia == 'math'){
                        materias = {
                                fisica : materias['fisica'],
                                programacion : materias['programacion'],
                                solidWorks : materias['solidWorks'],
                                quimica : materias['quimica'], 
                                math : personas
                        }
                }
                document.write(`<b>congrats</b>, ${alumno} te has inscrito a : ${materia}<br>`);
        }
}

document.write(`${materias['solidWorks']} <br>`); 
inscribir('kris','solidWorks'); 
inscribir('Kris','solidWorks');
document.write(materias['solidWorks'] + '<br>'); 
inscribir('kriz','solidWorks'); 
inscribir('xolo','solidWorks'); 
inscribir('euler','solidWorks'); 
inscribir('dalto','solidWorks'); 
inscribir('maro','solidWorks'); 
inscribir('Maro','solidWorks'); 
inscribir('nando','solidWorks'); 
document.write( `final class semester : <b> ${materias['solidWorks']} </b> <br>`); 