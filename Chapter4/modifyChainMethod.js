document.write('mCM JStest' + '<br>' + '<br>' );//msg in the console 



//              split ()                divide la cadena como queramos
document.write(`<b>split ()</b><br>`);
let cadenaSpli = 'hola,como,estas'; 
let resultadoSpli = cadenaSpli.split(','); 

// 'hola,como,estas' ha sido split() by comas : 'hola,como,estas' pero en realidad es un array, look at concole log.
document.write(` 'chain ${cadenaSpli}'<br>
ha sido <b>split()</b> by comas : '${resultadoSpli}' <br>
pero en realidad es un array, look at console.log <br><br>` );
document.write(`Call array position :<br>`); 
document.write(resultadoSpli[0] + '<br>');//hola 
document.write(resultadoSpli[1] + '<br>');//como
document.write(resultadoSpli[2] + '<br>'+ '<br>');//estas
console.log(resultadoSpli); 
//this shows with console log: 
//['hola', 'como', 'estas']
//0: "hola"
//1: "como"
//2: "estas"


//              (`EX to split it with space `)
document.write(`example to <b>split()</b> it with space :<br>`); 
let cadenaSpliSpace = 'curso.de.javaScript.desde.zero'; 
let resultSpliSpace = cadenaSpliSpace.split('.'); 
console.log(cadenaSpliSpace); 
document.write(`'${cadenaSpliSpace}' esta dividida por periods : <br>'${resultSpliSpace}'<br>`); 
document.write(`now is array : [ 'curso', 'de', 'javaScript', 'desde', 'zero' ] : <br>`) 
document.write(resultSpliSpace[0]+ '<br>'); 
document.write(resultSpliSpace[1]+ '<br>'); 
document.write(resultSpliSpace[2]+ '<br>'); 
document.write(resultSpliSpace[3]+ '<br>'); 
document.write(resultSpliSpace[4]+ '<br>' + '<br>'); 

document.write(`example to <b>split()</b> array<br>`);
let spliChain = 'hola soy un Array'; 
//the space is to separate when space is = space.  
//if i use .splt('o') ill get  'h,la s, un Array' to separate every 'o' de oso 
let spliResultado = spliChain.split('soy un');// cuando vea un 'soy un' lo quita y lo divide turns it into an array
//with space in .split('_') shows : hola,soy,un,array 
//                       no space : h,o,l,a, ,s,o,y, ,u,n, ,a,r,r,a,y
document.write(`<b>split</b> from '<b>${spliChain}</b>' with : <b>split('soy un')</b> : '${spliResultado}'<br><br>`);// aqui nos da: hola , Array 
console.log(`${spliResultado[3]}`);//console.logs: the word Array<br>



//              *substring() cuts the string you have to where you tell it to cut it START/END
document.write(`<b>substring()</b><br>`);
let chaiSubString = 'abcdefg';
let resultSUbString = chaiSubString.substring(0, 5);// (0,5) is start and end. if only one number is the start
console.log(resultSUbString[6]); //undefined. so fg doesnt exist
document.write(`from '${chaiSubString}' to '${resultSUbString}' with <b>substring(0, 5)</b>(start,end)<br><br>`);// abcde



//              *toLowerCase()*toUpperCase() 
document.write(`<b>*toLowerCase()*toUpperCase()</b><br>`);
let toLowerCaseChain = 'PACO ES DE MEXICO'; 
let toUpperCaseChain = 'paco quiere ser de canada'; 
let toLowerCaseChainResult = toLowerCaseChain.toLowerCase (); 
let toUpperCaseChainResult = toUpperCaseChain.toUpperCase(); 
document.write(`donde estoy : '${toLowerCaseChainResult}' vs/ `); 
document.write(`donde quiero estar : <b>'${toUpperCaseChainResult}'</b> <br><br>`); 



//              *toString()             changes to string()
//with numbers..
document.write(`<b>*toString()</b><br>`);
let toStringChain = 50; 
let toStringResultado = toStringChain.toString(); 
//with arrayS..
let toStringChain2 = ['pater', 'paco', 'francisco', 'comunitaris']; 
//change to string
let toStringResultado2 = toStringChain2.toString(); 
//numbers
document.write(`number 50 converted to string + number 2 ${toStringChain}` + 2  + '<br>' );// string 502 
//arrayS
document.write(`
<b>the array</b> :'${toStringChain2}'<br>
was changed <b>toString()</b> and caps : '${toStringResultado2.toUpperCase()}'<br>
<b>new string</b> has : '${toStringResultado2.length}'chars<br>
<b>the array</b> has : '${toStringChain2.length}'<br><br>`);
//
//the array : 'pater,paco,francisco,comunitaris' was changed toString() : 'PATER,PACO,FRANCISCO,COMUNITARIS', now new string has: '32'chars instead of the array : '4'



//              *trim()
document.write(`<b>*trim()</b><br>`);
let trimChain = '     pater      ';//start has five spaces & end has six spaces. 

let trimChainResult = trimChain.trim();//trim all the chain 
let trimChainEndResult = trimChain.trimEnd();//trim the end  
let trimChainStartResult = trimChain.trimStart(); 

document.write(`
this is the <b>lenght</b> of : <b>'${trimChain}'</b> : '${trimChain.length}'<br>
this is the lenght of : '${trimChain}' <b>after trim()</b> : '${trimChainResult.length}'<br>
this is the lenght of : '${trimChain}' <b>after trimEnd()</b> : '${trimChainEndResult.length}'<br>
this is the lenght of : '${trimChain}' <b>after trimStart()</b> : '${trimChainStartResult.length}'
<br><br>`); 
/*
this is the lenght of : ' pater ' : '16'
this is the lenght of : ' pater ' after trim() : '5'
this is the lenght of : ' pater ' after trimEnd() : '10'
this is the lenght of : ' pater ' after trimStart() : '11'

*/
//

