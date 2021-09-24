/*
pater has 90% ass, promedio 7/10, unsure about 75% work
to complete has to work
8/24 to work
24/two weeks to study
24/two weeks to homework
56/two weeks to job
8/two weeks to houseduties

30mn per dyay for house owrk 
100 work 
100 study -
240 trabajo
*/
let Trabajo = '240mn de trabajo'; 
let HomeWork = '100mn de tareas'; 
let StudyTime = '100mn de study time'; 
let HouseChores = '30mn de limpiar'; 
let Descanso = '10mn de descansos'; 

console.log('TAREAS');
for ( var i = 0; i < 14; i++ ){//open loop 
    if (i == 0){
        console.group ('Primera Semana'); 
    };
    console.groupCollapsed('Dia' + (i+1)); 
    console.log(Trabajo);
    console.log(Descanso);
    console.log(StudyTime);
    console.log(Descanso);
    console.log(HomeWork);
    console.log(HouseChores); 
    console.groupEnd(); 
    if (i == 6){//if day seven = to seven, semana ends, semana dos starts
        console.groupEnd();
        console.groupCollapsed('Segunda Semana'); 
    }
}//close loop
console.groupEnd();//close open groups
console.groupEnd();//close open groups 

