//*starts/endsWith()
//declare em
let cadena = 'c(1) hola';//if SAPACE MATTERS FROM ('(1) hola,_') TO (' (1) hola,_') THE 'SPACE' BEHIND ' (1)' MAKES IT true
//let cadena1 = 'ccomo estas' //other example ('como estas') to (' como estas') of 'space behind'
//let cadena2 = 'c(2) tu';//no space
//let cadena2_1 = ' (2) tu';//with  space
//let cadena3 = 'c(3) pater'

/*
//      declare startsWithS
let resultadoStart = cadena.startsWith(cadena); // 'cadena' igual to 'cadena'
let resultadoStart2 = cadena.startsWith(cadena2); //so 'cadena' NOT to igual 'cadena2'
let resultadoStart2_1 = cadena.startsWith(cadena2_1); // 'cadena' not igual to 'cadena2_1'

//      show startsWithS 
document.write (resultadoStart + '<br>');//shows 'FALSE'  
document.write (resultadoStart2 + '<br>');//shows 'true'  
//example of space behind  NOTE : SAW NO CHANGE IN SPACE
document.write (resultadoStart2_1 + '<br>');//shows 'FALSE' 

*/
//      declare endsWithS
document.write('JS test'); 
let caden = 'cadena de prueba'
let searchyEnd = 'prueba';
let resultad = caden.endsWith(searchyEnd); 


//      show endsWithS
//document.write = (resultad); did not show 'true'
//console.log = (resultad); did not show 'true'
alert(`'cadena de prueba' ends with 'prueba' : ${resultad}`); // only one that showed 'true' in promt 


//      test two 

let cadenaMoona = 'company moona'; 
let endMoona = 'moona'; 
let cadenaRis = 'pater comunitaris'
let endRis = 'comunitaris'; 

let showMoona = cadenaMoona.endsWith(endMoona); 
alert('company moona ends with moona : ' + showMoona);//shows true

let showRis = cadenaRis.endsWith(endMoona); 
alert(cadenaRis + ' ends with ' + endMoona + ' : '  + showRis);//shows FALSE as cadenaRis ends with 'comunitaris'

let showRis1 = cadenaRis.endsWith(endRis); 
alert(`'${cadenaRis}'_ends with_'${endRis}'_:_${showRis1}`);//shows 'true'