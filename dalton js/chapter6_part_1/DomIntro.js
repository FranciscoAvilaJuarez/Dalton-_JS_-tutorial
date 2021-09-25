
/*node is all labels even the body since : <body>

*/
//getElementById()
contenido = document.getElementById('contenido');//we're just grabbing the contents of contenido :  hola paco 
document.write('zero : ' + contenido + '<br>');//shows '[object HTMLParagraphElement]'


//getElementByTag()
parrafoTag = document.getElementsByTagName('p');//all 'P's
document.write(`one : <b>${parrafoTag}</b><br>`);//shows '[object HTMLCollection]' 
//ex of htmlCollection: 
parrafoTag = document.getElementsByTagName('p'); 
document.write(`two : <b>${parrafoTag[0]}</b><br>`);//shows '[object HTMLCollection][object HTMLParagraphElement]' 
//gives us the  ELEMENT OF THAT OBJECT. NOT AN ARRAY ES UN OBJETO : this is from 'p'[0] : [object HTMLParagraphElement]
// ex of this is we call it again, this time it shows the second 'p' 
document.write(`three : <b>${parrafoTag[1]}</b><br>`);
// this the third and last one
document.write(`four : <b>${parrafoTag[2]}</b><br>`);//[object HTMLParagraphElement]
//which doesnt exit as no more <p> in index
document.write(`five ok : <b>${parrafoTag[3]}</b><br>`);//undefined


//querySelector()       selects only one element
parrafo = document.querySelector('.parrafoTag')//DONT FORGET THE dot IN('.parrafo') classes get called with 
// DOTS: class="parrafo"  
document.write(`six : ${parrafoTag} <br>`);//[object HTMLParagraphElement]   this is only returning one element
parrafoId = document.querySelector('#contenido')//to select ID we use # as id="contenido"
document.write('seven : ' + parrafoId + '<br>');//[object HTMLParagraphElement]   this is only returning one element
//returning : [object HTMLParagraphElement]


//querySelectorAll()
parrafoAllClass = document.querySelectorAll('.todos');
parrafoAllId = document.querySelectorAll('#todos');
//          [object NodeList] are NOT ARRAYS    btw
//returns : [object NodeList]
document.write(`<b style='color:#FF0000'> eight : ${parrafoAllClass}</b><br>`);//also br due to this
//here i only have 7 'class'(count : from zero) 
document.write (`nine : ${parrafoAllClass[7]}<br>`)//returns :  [object HTMLParagraphElement] BUT 
document.write (`ten ok :  ${parrafoAllClass[8]}<br>`)//returns :  undefined 

//returns : nine : [object NodeList]
document.write(`eleven : ${parrafoAllId} <br>`);// also br due to this 
//same here i have 3 'Id'(count : from zero) 
document.write(`twelve : ${parrafoAllId[3]} <br>`)//should show : [object HTMLParagraphElement], nice
document.write(`thirteen ok : ${parrafoAllId[4]}, yay! <br>`)//should show : undefined, correct


//setAttribute() : modifica el valor de un atributo; </p>
const rangoEtario = document.querySelector('.rangoEtario')//selecting class
rangoEtario.setAttribute('type', 'text');//changed cosnt from range to text input 
document.write('fourteen : '+ rangoEtario + '<br>' ); 


//getAttribute()    
let getRangoEtario  = document.querySelector('.rangoEtario'); 
document.write(`fifteen, this the getAttribute() : ${getRangoEtario.getAttribute('type')}`);//returns : text


//removeAttribute()
let getAttribute = document.querySelector('.rangoEtario')
getRemueveAttribute = rangoEtario.removeAttribute('type','text'); 
//returns : <input ,="" class="rangoEtario">  no type = text



