document.write('JS test, padStart;' + '<br>'+'<br>'+'<br>'); 
/*              chain method padStart()
*padStart()
*padEnd()
*repeat()

*/

//              padStart() rellena la cadena al principio
let chain = '-abc'; //has 4 characters
let chain2 = '_abc'; 

//we're telling to 'fill' chain with 12 characters of '-abc'
let resultStart = chain.padStart(12, chain2);

//what shows is: '  '_abc_abc-abc' IS the RESULT of 12 '_abc' padStartS inserted into '-abc'  '
document.write (`
'<b>${resultStart}</b>' IS the RESULT of 12 '${chain2}' <b>'padStartS'</b> inserted into '${chain}'
<br>`);



//              padEnd()        rellena la cadena al final 
// insert 12 '_abc' into '-abc' until you have 12characters in '-abc'
let resultEnd = chain.padEnd(12, chain2);

//what shows is: '  '-abc_abc_abc' IS the RESULT of 12 '_abc' padEndS_ inserted into '-abc'  '
document.write (`'<b>${resultEnd}</b>' IS the RESULT of 12 '${chain2}' <b>'padEndS_'</b> inserted into '${chain}'<br>` ); 

//ejemplo en numbers 

let numero =  '_10_';
let colchonInicio = '0123456789';

//we pass the ammount of characters and what is filling it at the start
let colchonInicioNumero = numero.padStart(14, colchonInicio ); 
document.write(`
we add ${colchonInicio} to ${numero} using 14 spaces with <b>'padStart' : '${colchonInicioNumero}</b>' is NOT a 10 is a one and a zero using two spaces (added '_' to show difference) 
<br>`); 


let colchonFIn = '9876543210'
//we pass the ammount of characters and what is filling it at the end
let colchonFinNumero = numero.padEnd(14, colchonFIn);
//what shows is: we add 9876543210 to _10_ using 14 spaces with 'padEnd' : '_10_9876543210' 
document.write(`
we add ${colchonFIn} to ${numero} using 14 spaces with <b>'padEnd' : '${colchonFinNumero}</b>' is NOT a 10 is a one and a zero using two spaces (added '_' to show difference) 
<br>`); 



//              repeat() 
//declare
let repite = '_123'; 
//assign 
let repiteNum = repite.repeat(5);// repite cinco veces '123'
//show : _123_123_123_123_123
document.write('<b>'+repiteNum+'</b>' + '<br>'); 

//what shows is: numeros '_123' se repiten cinco veces con repeat : '_123_123_123_123_123'
document.write( ` numeros '${repite}' se repiten cinco veces con <b>repeat</b> : '<b>${repiteNum}</b>' <br>` )






//document.write('JS test, padStart;' + '<br>');