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
//      endsWithS
document.write('JS test'); 
let caden = 'cadena de prueba'
let searchEnd = 'prueba';

//      show endsWithS
//document.write = (resultad); did not show 'true'
//console.log = (resultad); did not show 'true'
let resultad = caden.endsWith(searchEnd); 
alert( ` '${caden}'_ends with_'${searchEnd}'_:_'${resultad}' ` ); // only one that showed 'true' in promt 

//      test two 
let cadenaMoona = 'company moona'; 
let endMoona = 'moona'; 
let cadenaRis = 'pater comunitaris comunitaris'
let endRis = 'comunitaris'; 


//          endsWith()      **note only provides true or false
let showMoona = cadenaMoona.endsWith(endMoona); 
alert( cadenaMoona + '_ends with_' + endMoona + '_:_' + showMoona );//shows true

let showRis = cadenaRis.endsWith(endMoona); 
alert( cadenaRis + '_ends with_' + endMoona + '_:_' + showRis );//shows FALSE as cadenaRis ends with 'comunitaris'

let showRis1 = cadenaRis.endsWith(endRis); 
alert( `'${cadenaRis}'_ends with_'${endRis}'_:_'${showRis1}'` );//shows 'true'



//          includes()   the search is anywhere with in them param. 
let incluye = cadenaMoona.includes(endMoona); 
alert(`'${cadenaMoona}' includes '${endMoona}'_:_'${incluye}'`);//shows true

let incluyeRis = cadenaRis.includes(endMoona); 
alert(`'${cadenaRis}' includes '${endMoona}'_:_'${incluyeRis}'`)//shows false as previous example



//          indexOf()  **counts from zero 
let showIndexOf = cadenaMoona.indexOf(endMoona); 
alert(`la palabra '${endMoona}' en '${cadenaMoona}' empieza con letra '${cadenaMoona[8]}' en '${showIndexOf}vo' lugar`);//shows 8vo lugar  
alert(cadenaMoona[8]);//shows 'm' same as cadenaMoona.indexOf(endMoona) but in number 

let showIndexOfPC = cadenaRis.indexOf(endRis); 
// shows:la palabra 'comunitaris' en 'pater comunitaris' empieza con la letra 'c' en el '6to lugar'
alert (` la palabra '${endRis}' en '${cadenaRis}' empieza con letra '${cadenaRis[6]}' en '${showIndexOfPC}to lugar' `);

alert(cadenaRis[6]);//shows 'c' same as 'cadenaRis.indexOf(endRis)' but in number 

//          to get index of                 **note result of '-1' is the result of zero finds
//                          shows the index of 'comunitaris' in 'pater comunitaris' es '6'
let risIndex = cadenaRis.indexOf(endRis)
alert (risIndex); //shows '6'
alert (`the index of '${endRis}' in '${cadenaRis}' es '${risIndex}'`);//



//          lastIndexOf()       shows last index of
let risLastIndex = cadenaRis.lastIndexOf(endRis); 
//shows ' the L  ast index of 'comunitaris' in 'pater comunitaris comunitaris' es : '18' '
alert(` the L ast index of '${endRis}' in '${cadenaRis}' es : '${risLastIndex}'`);

alert( `
    la primera letra con la que empieza '${endRis}'
    en donde '${endRis}' aparece por ultima vez en '${cadenaRis}' 
    es : '${cadenaRis[18]}' en el last index : '${risLastIndex}'
`);//shows 'c' 


//to conplete indexes
alert (endMoona[0] + endMoona[1] + endMoona[2] + endMoona[3] + endMoona[4]);// shows ' moona '
alert (` '${endMoona[0]}${endMoona[1]}${endMoona[2]}${endMoona[3]}${endMoona[4]}' `);// shows  'moona' 