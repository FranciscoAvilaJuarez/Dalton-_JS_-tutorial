//cosole to check for errors and codes

 /*funciones de registro*/
    //assert() gives failed assertion error in ex,
    console.assert(5 < 3); 
    //Assertion failed: console.assert

    //clear()   clears the console
    console.clear()

    //error()   *shows error message
    console.error('hola che')
    //returns hola che 

    //info()    works as log()
    console.info('muy bien')
    //dir()     the dad of .info() and  .log()
    console.dir()

    //table()   takes a data array input or object input
    console.table([25,3232,262,584,44,4,88,9,1 ]); 
    //shows table 

    //warn()    is a warning, code runs but gives yellow warning
    console.warn('oye che cuidado que estas en la linea');

    /*count functions   */
//count()   registra el numero ded veces que se llama al count()
console.count(); 
//countReset()  reseta el conteo 
console.countReset()

    /*grouping functions    */
//group()       creates a group, everything added after this will be inside group
//console.group(); 
//groupCollapsed()  sames as group but does not show the group 'open'
console.groupCollapsed(); 
//groupEnd()    terminates group
console.groupEnd(); 

    /*funciones de temporizacion    */
//Time()    inicia un temporizador
console.time();//starts timer 
//timeLog()     shows recorded time      
console.timeLog();
//timeEnd()     stops the timer
console.timeEnd(); 
console.timeLog();//timer error 

//change font
console.log('%c paco', 'color:red; background:blue; paddig:30px 100px; border:3px solid red'); 

