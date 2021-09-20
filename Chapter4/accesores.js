//document.write(`'${}'`);
// <b> <br> 
// style='color:#FF0000'
document.write (`<b style='color:#FF0000'> metodos de arrays : accesores </b><br><br><br>`); 



//*Join() *une todos los elementos de una array en una cadena  
//                              ***the added feature is you can separate them by anything
document.write(`<b style='color:#FF0000'>*Join () *makes an array of many into one</b><br>`)
//initial array
let arraiJoin = ['pater', 'comunitaris', 'paco'];
document.write(`<b>*Initial array</b> : '${arraiJoin}' with <b>'${arraiJoin.length}' elementos</b><br>`); 
//pos initial array
document.write(`<b>zero pos</b> in initial array : <b>'${arraiJoin[0]}'</b><br><br>`);
//join array
let arraiJoinResult = arraiJoin.join(`<br> Elemento : `);
//arraiJoinResult value
document.write(`
Changed with <b>join ()</b> to : <br>
elemento: ${arraiJoinResult}<br><br>
`);
//here we separate with <br>
document.write(`
<b>*New array : </b><br>
elemento: ${arraiJoinResult}<br>
with <b>'${arraiJoinResult.length}' elementos</b>, turned array into one<br>
`);
//pos new array
document.write(`<b>zero pos</b> in new array : <b style='color:#FF0000'> '${arraiJoinResult[0]}'</b><br><br>`);
//faster way. this is working with '(`<br> Elemento : `)' in 
document.write(`*Segun a <b>faster way</b> or other way to do this :  is what is making new array go to the next LN<br>`);
document.write(`
BUT this is working along with "let arraiJoinResult = arraiJoin.join(<b>and whats in here</b>);"<br>
elemento: ${arraiJoinResult} <br><br>
`);
//the note
let string = 'string'; 
document.write(`
<b>the note :</b>
<b style='color:#FF0000'>zero pos in</b> 
<b>'${string}'</b>
is : 
<b style='color:#FF0000'>'${string[0]}'</b>
<br><br><br>
`);



//slice() devuelve una parte del array dentro de un NUEVO array
document.write(`<b style='color:#FF0000'>*Slice() *(from, to)</b><br>`)

let arraiPie = ['pie0', 'pie1', 'pie2', 'pie3'];
document.write(`*Initial array : <b>'${arraiPie}'</b><br>`); 

//so here one is counted but not THREE, takes one and two out into new array
//      (start/end) ex, (0,3) or (0,-1) the negative number works as 'take last one out' or last two, 3,4
let arraiSliceResult = arraiPie.slice(1,3); 

document.write(`<b>*New array : '${arraiSliceResult}'</b> slices one and two<br>`);
document.write(`*<b>Initial array</b> : '${arraiPie}' still the <b>same</b><br><br><br>`);


/*
//map()
document.write(`<b style='color:#FF0000'>map()</b><br>`);

let arraiMap = ['pie0', 'pie1', 'pie2', 'pie3'];
document.write(`initial arrai map : '${arraiMap}'<br>`);
// ass map
let arraiMapResult = arraiMap.map(); 
document.write(`new arrai map : '${arraiMapResult}'<br>`);
document.write(`initial arrai map : '${arraiMap}'<br>`);
*/