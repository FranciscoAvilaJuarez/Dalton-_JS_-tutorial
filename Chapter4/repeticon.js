//array methods -repeticon
document.write(`
<b style='color:#FF0000'>____Array Methods - Repeticion -</b> 
<br><br>`);
                                                                                //  document.write(`'${}'`);
                                                                                //  <>  <br>
                                                                                //  *filter()
                                                                                //  style='color:#FF0000'
//filter()
document.write(`
<b>array.filter() <br>
works as a function : </b><br> 
<b style='color:#FF0000'> numeroS.filter( numer0 => document0.writ(numer0 + 'brake') ); 
</b><br>`)
let numeros = ['location 0', 'location 1', 'location 2', 'location 3', 'location 4']; 
numeros.filter(numero => document.write(numero + '<br>') );//el <br> es que hace que pase al otro renglon.  
/* same as
numeros.filter (function(numero){
    document.write(numero + '<br>');
)}; 
*/
document.write(`<br><br><br>`);

//forEach()
/*
document.write(`<b>forEach()</b> *does the same as <b>filter()</b><br>`);
document.write(`<b style='color:#FF0000'>arraiParaPie.forEach(rebanada => document0.writ(moneySign{rebanada}brake) ); </b><br>`);
let arraiForPie =  ['Slice 0', 'Slice 1', 'Slice 2', 'Slice 3', 'Slice 4']; 
arraiForPie.forEach(PieSlice => document.write (`<b>Pie : ${PieSlice},</b><br>`) ); 
*/
//if filter() is changed for forEach() WOULD NOT WORK (STICK TO FILTER)
let arraiForPie =  ['Slice_', 'Slice 1', 'Slice 02', 'Slice 003']; 
arraiForPieResultado = arraiForPie.filter(Slice => Slice.length > 7); 
document.write(`initial array : '${arraiForPie}'<br>`);
document.write(`greater than six chars : '${arraiForPieResultado}'<br>`);
