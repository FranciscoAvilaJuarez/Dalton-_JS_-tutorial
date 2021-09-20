document.write(`
<b style='color:#FF0000'>____array methods -transformadores-</b> 
changes actual value, instead of <b>'renaming it'</b> like on chain methods 
<br><br>`);


//              *pop()              *eliminates the last. 
document.write(`<b style='color:#FF0000'>-*pop()  *eliminates the last element</b><br>`);
let arraiPop = ['pater', 'comunitaris', '<b>paco</b>']; 
document.write(`initial array : '${arraiPop}'<br>`);//initial array : 'pater,comunitaris,paco'
let arraiPopResultado = arraiPop.pop();//pop paco out
document.write(`elemento removido : '${arraiPopResultado}' with <b>pop()</b><br>`);
document.write(`<b>new array 'value'</b> : '${arraiPop}'<br><br><br>`);//pop() from : 'pater,comunitaris'


//              *push()             *add at end of array
document.write(`<b style='color:#FF0000'>-*push() *adds at end of array</b><br>`);
let arraiPush = ['pater', 'comunitaris', 'paco'];
document.write(`initial array : '${arraiPush}'<br>`); 
let arraiPushResult = arraiPush.push('<b>francisco</b>','<b>frankie</b>');//shows five as three in array plus two we are adding
document.write(`elemento added con <b>push()</b> : '${arraiPushResult}' <br>`); 
document.write(`<b>new array</b> : '${arraiPush}'<br>`);//new array : 'pater,comunitaris,paco,francisco,frankie'
document.write(`'${arraiPush[4]}' is array '${arraiPushResult}' from '${arraiPush.length}' <br><br><br>`);


//              *shift()              *eliminates the first one
document.write(`<b style='color:#FF0000'>-*shift()  *eliminates the first one</b><br>`);
let arraiShift = ['<b>pater</b>', 'comunitaris', 'paco'];
document.write(`initial array : '${arraiShift}' <br>`)
let arraiShiftResultado = arraiShift.shift();//shift pater out
document.write(`elemento removido with <b>shift()</b> : '${arraiShiftResultado}'<br>`)
document.write(`<b>new array</b> : '${arraiShift}'<br><br><br>`);


//              *unshift()              *adds one or more to array at begining
document.write(`<b style='color:#FF0000'>-*unshift() *adds one or more to array at begining</b><br>`); 
let arraiUnshift = ['pater', 'comunitaris', 'paco']; 
document.write(`initial array : '${arraiUnshift}'<br>`); 
document.write(`ammount of elements : <b style='color:#FF0000'>'${arraiUnshift.length}'</b><br>`); 
let arraiUnshiftResult = arraiUnshift.unshift('<b>frankie</b>', '<b>francisco</b>'); 
document.write(`ammount of elements after using <b>unshift()</b> : <b style='color:#FF0000'>'${arraiUnshiftResult}'</b> <br>`);
document.write(`<b>new array</b> : '${arraiUnshift}'<br><br><br>`); 


//              *reverse()              *reverts the order of the array
document.write(`<b style='color:#FF0000'>-*reverse() *reverses the order of the array</b><br>`); 
let arraiReverse =  ['pater', 'comunitaris', 'paco', 'francisco','<b>frankie</b>'];
document.write(`<b>*initial array</b> : '${arraiReverse}'<br>`)//'pater,comunitaris,paco,francisco,frankie'
let arraiReverseResult = arraiReverse.reverse(); 
//reverse order : 'frankie,francisco,paco,comunitaris,pater'
document.write(`*after using <b>reverse()</b> : '${arraiReverseResult}'<br>`); 
//reverse order : 'frankie,francisco,paco,comunitaris,pater'
document.write(`<b>*new array</b> : '${arraiReverse}'<br><br><br>`);//'frankie,francisco,paco,comunitaris,pater'


//              *sort() *organizes alphabetically?
document.write(`<b style='color:#FF0000'>-*sort()  __*sorts alphabetically :</b><br>`); 
let arraiSort = ['z', 'pater', 'comunitaris', 'paco', '<b>avila</b>']; 
document.write(`initial array : '${arraiSort}'<br>`);
let arraiSortResult = arraiSort.sort(); 
document.write(`after using <b>sort()</b> : '${arraiSortResult}' <br>`);
document.write(`*new array : '${arraiSortResult}'<br><br><br>`);


//              *splice() *changes content by deleting or adding
document.write(`<b style='color:#FF0000'>-*splice() *changes array by delete/adding with (start/end)</b><br>`);

let arraiSplice = ['frankie', 'pater', 'comunitaris', 'avila', 'paco', '<b>frank</b>'];
document.write(`<b>initial array</b> : '${arraiSplice}'<br>`);
let arraiSpliceResult = arraiSplice.splice(1,3, 'start', 'end'); 
document.write(`after using <b>splice(1,3)</b> : '${arraiSpliceResult}' note: <b>frankie & frank</b> are gone <br>`);
document.write(`<b>new array</b> : '${arraiSpliceResult}'<br>`)

//document.write(``)
