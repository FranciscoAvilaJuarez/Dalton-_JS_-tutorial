document.write(`
<b style='color:#FF0000'>____array methods -transformadores-</b> 
changes actual value, instead of <b>'renaming it'</b> like on chain methods 
<br><br>`);


//              *pop()              *eliminates the last. 
document.write(`<b style='color:#FF0000'>-*pop()  *eliminates the last element</b><br>`);
let arraiPop = ['pater', 'comunitaris', '<b>paco</b>']; 
document.write(`initial array : '${arraiPop}'<br>`);//initial array : 'pater,comunitaris,paco'
let arraiPopResultado = arraiPop.pop();//pop paco out
document.write(`elemento removido with <b>pop()</b> : '${arraiPopResultado}' <br>`);
document.write(`<b>new array 'value'</b> : '${arraiPop}'<br><br><br>`);//pop() from : 'pater,comunitaris'


//              *push()             *add at end of array
document.write(`<b style='color:#FF0000'>-*push() *adds at end of array</b><br>`);
let arraiPush = ['pater', 'comunitaris', 'paco'];
document.write(`initial array : '${arraiPush}'<br>`); 
let arraiPushResult = arraiPush.push('<b>francisco</b>','<b>frankie</b>');//shows five as three in array plus two we are adding
document.write(`number of elementos added con <b>push()</b> : '${arraiPushResult}' <br>`); 
document.write(`<b>new array</b> : '${arraiPush}'<br>`);//new array : 'pater,comunitaris,paco,francisco,frankie'
document.write(`array '${arraiPush}' from '${arraiPush.length}' : '${arraiPush[4]}'<br><br><br>`);


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
//to simply add item with out replacing, is (1, 0) start position one and end at zero.
document.write(`<b style='color:#FF0000'>-*splice() *changes array by delete/adding with (start/end)</b><br>`);
//array ct starts from ZERO. 
let arraiSplice = ['<b>frankie</b>', 'pater', 'comunitaris', 'avila', 'paco', '<b>frank</b>'];
//frankie,pater,comunitaris,avila,paco,frank
document.write(`<b>initial array</b> : '${arraiSplice}'<br>`);
//replace from and add
let arraiSpliceReplaceResult = arraiSplice.splice(1,4, 'addedItem', 'masAddedItem');
//pater,comunitaris,avila,paco
document.write(`after using <b>splice()</b> : '${arraiSpliceReplaceResult}' <b>is whats being replaced,  one thru four</b><br>`);
//frankie,addedItem,masAddedItem,frank
document.write(`<b>new array</b> : '${arraiSplice}'<br> `)//'frankie,pater,comunitaris,avila,paco,start,end'

// splice() but just adding (no replacement) the zero is what keeps from replacement
let arraiSpliceAddResult = arraiSplice.splice(-1,0, '<b>justAdd</b>');//IF (-1,0), justAdd GOES TO POS 4 END OF REPLACEMENT
//WITH (1,0)
//frankie,justAdd,addedItem,masAddedItem,frank  
//WITH (-1,0)
//frankie,addedItem,masAddedItem,justAdd,frank
document.write(`<b>just adding</b> : '${arraiSplice}'<br>`);
document.write(`what was added : <b>'${arraiSpliceAddResult}'</b> but noting shows<br>`);
//document.write(``)
