document.write('mCM JStest');//msg in the console 


//              split ()                divide la cadena como queramos
let cadenaSpli = 'hola,como,estas'; 
let resultadoSpli = cadenaSpli.split(','); 

// 'hola,como,estas' ha sido split() by comas : 'hola,como,estas' pero en realidad es un array, look at concole log.
document.write(` '${cadenaSpli}' ha sido <b>split()</b> by comas : '${resultadoSpli}' pero en realidad es un array, look at console.log <br>` );

document.write(resultadoSpli[0] + '<br>');//hola 
document.write(resultadoSpli[1] + '<br>');//como
document.write(resultadoSpli[2] + '<br>');//estas

//this shows with console log: 
//['hola', 'como', 'estas']
//0: "hola"
//1: "como"
//2: "estas"
console.log(resultadoSpli); 

//              EX to split it with space 
let cadenaSpliSpace = 'curso.de.javaScript.desde.zero'; 
let resultSpliSpace = cadenaSpliSpace.split('.'); 
document.write(` 
'${cadenaSpliSpace}' esta dividida por periods : <br>'${resultSpliSpace}' <br><br>`); 
console.log(cadenaSpliSpace); 
//now is array : [ 'curso', 'de', 'javaScript', 'desde', 'zero' ] 
document.write(resultSpliSpace[0]+ '<br>'); 
document.write(resultSpliSpace[1]+ '<br>'); 
document.write(resultSpliSpace[2]+ '<br>'); 
document.write(resultSpliSpace[3]+ '<br>'); 
document.write(resultSpliSpace[4]+ '<br>'); 

//              split()
let spliChain = 'hola soy un Array'; 
//the space is to separate when space is = space.  
//if i use .splt('o') ill get  'h,la s, un Array' to separate every 'o' de oso 
let spliResultado = spliChain.split('soy un');// cuando vea un 'soy un' lo quita y lo divide turns it into an array
//with space in .split('_') shows : hola,soy,un,array 
//                       no space : h,o,l,a, ,s,o,y, ,u,n, ,a,r,r,a,y

document.write(`${spliResultado}<br>`);// aqui nos da: hola , Array 
console.log(`${spliResultado[3]}<br>`);//console.logs: the word Array<br>



//              *subString()


 
