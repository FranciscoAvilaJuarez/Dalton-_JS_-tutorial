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
'${resultStart}' IS the RESULT of 12 '${chain2}' <b>padStartS</b> inserted into '${chain}'
<br>`);



//              padEnd()        rellena la cadena al final 
// insert 12 '_abc' into '-abc' until you have 12characters in '-abc'
let resultEnd = chain.padEnd(12, chain2);

//what shows is: '  '-abc_abc_abc' IS the RESULT of 12 '_abc' padEndS_ inserted into '-abc'  '
document.write (`'${resultEnd}' IS the RESULT of 12 '${chain2}' <b> padEndS_</b> inserted into '${chain}'<br>` ); 



//              repeat() 