/*chain methods
    //ernesto
    //se puede usar para cambiar la primera 'e' por 'E' en ernesto

    metodo, cadena que busca ernesto con 'ernesto' y la cambia por 'Ernesto'
    y usar 'cadena' para poner un (punto)'.' al final  
    
    pero 

    para asegurase 'Ernesto' sigue siendo igual que 'ernesto'
    con otro metodo que nos dice si/no 
            
    chain method

*concat() takes two or more and gives result ('resultado = concat('hola', 'juan')' = hola juan?)

*padStart()
*padEnd()
*repeat()

*split()
*subString()
*toLowerCase()
*toUpperCase()
*trim()
*some are missing. to see later...

*/    

//  concat()
let cadena = '(1) hola,_'; 
let cadena1 = 'como estas_'
let cadena2 = '(2) tu';
let cadena3 = '(3) pater'

let resultado = cadena.concat(cadena2); 
document.write (resultado + '<br>');  

let resultado2 = cadena.concat(cadena3); 
document.write (resultado2 + '<br>'); 

let resultado3 = cadena.concat(`${cadena1}${cadena2}${cadena3}`);//RESULT: (1) hola,_como estas_(2) tu(3) pater
document.write (resultado3 + '<br>'); 

let resultado4= cadena.concat(cadena1, cadena2, cadena3);//RESULT: (1) hola,_como estas_(2) tu(3) pater
document.write (resultado4 + '<br>'); 

 