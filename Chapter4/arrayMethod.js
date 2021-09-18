document.write(`
<b style='color:#FF0000'>____array methods </b> 
changes actual value, instead of <b>'renaming it'</b> like on chain methods 
<br><br>`);

//              *pop()              *elinates the last. 
document.write(`<b>*pop()  *elinates the last. </b><br>`);
let arrai = ['pater', 'comunitaris', 'paco']; 
document.write(`<b>initial array : '${arrai}'</b><br>`);//initial array : 'pater,comunitaris,paco'
let arraiResultado = arrai.pop();//pop paco out
document.write(`elemento removido : <b style='color:#FF0000'>'${arraiResultado}'</b> with <b>pop()</b><br>`);
document.write(`<b>new array value : '${arrai}'</b><br><br><br>`);//pop() from : 'pater,comunitaris'



//              *shift()              *eliminates the first one

document.write(`<b>*shift()  *eliminates the first one</b><br>`);
let arrayShift = ['pater', 'comunitaris', 'paco'];
document.write(`<b>initial array : '${arrayShift}'</b><br>`)
let arrayShiftResultado = arrayShift.shift();//shift pater out
document.write(`elemento removido : <b style='color:#FF0000' >'${arrayShiftResultado}'</b> with <b>shift()</b><br>`)
document.write(`<b>new array value : '${arrayShift}'</b><br><br>`);



//              *push()             *add at end of array
document.write(`<b>*push() *adds at end of array</b><br>`);
let arrayPush = ['pater', 'comunitaris', 'paco'];
document.write(`initial array : '${arrayPush}'<br>`); 
let arrayPushResult = arrayPush.push('francisco','frankie');//shows five as three in array plus two we are adding
document.write(`elemento added to position : <b style='color:#FF0000'>'${arrayPushResult}'</b><br>`); 
document.write(`new array : '${arrayPush}'<br>`);//new array : 'pater,comunitaris,paco,francisco,frankie'



//              *reverse()              *reverts the order of the array
alert(`reverse() *reverts the order of the array`); 
let arrayReverse =  ['pater', 'comunitaris', 'paco', 'francisco','frankie'];
document.write(`initial array '${arrayReverse}'`)
let arrayReverseResult = arrayReverse.reverse(); 
document.write(`'${arrayReverseResult}'`); 
document.write(`'${arrayReverse}'`); 

