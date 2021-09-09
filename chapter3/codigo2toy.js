/*
problem 

club
*let +18 enter 
*1st to enter past 2am is free, no cover
*club opens at 10pm
*club closes at 5am

brunch 
*open from 11am
*close 2pm
*all ages ok 
*all other hrs is close. 
*/



let free = false;  
let brunch = 'COME to Our brunch from 11am to 14pm.'
//brunch = false; 
//function to validate client
const validarCliente = (time) =>{       //open vC
    if (time >0 && time <=24){     //to check for 24hr format 
        let edad = prompt('cual es tu EDAD?');      //to check for age SECOND
        
        //THEN TO THE REST of the four options

        //to kick out over 50 during club hours and to welcome anyone to brunch 
        //one - if edad over 50, past 0am, before 7am OR edad over 1, past 11am, before 2pm
        if  (edad>=50 && time>0 && time<=5 || edad>=1 && time>=11 && time<=14){ 
            let number = 5569696969;    
            free = false;    //give number 
            
            if (edad >= 50 && time >= 0 && time <= 5) {     //if over 50 && past 2AM && bfore 7AM 
                alert(`too OLD to enter HERE. but ${brunch} ${number} to reserve `); //alert  
            }
            else{       //the rest conditions print here. age over 1, time after 11AM, before 14PM any age 
                alert(`welcome to BRUNCHY, its now ${time}:00Hrs, please remember brunch ends at 2PM(1400HRS)`)
            }
        }       //end1
        
        //enter club event over 18 
        //two - check IF edad over/igual 18, past 0am, before 5am OR edad over/igual 18, past 10pm, bfore 24pm 
        else if (edad >= 18 && time > 0 && time <= 5 || edad>=18 && time>=20 && time<24 ) {  
            if(free == false) {  //opening && closin param were neded, not just one param
                let nombre = prompt('cual es tu nombre?');  //if free is false it will ask for name. for 1st person
                alert (`hola. ${nombre} time of entry:${time}:00Hr y Tu eTres Free, first FAN despues de las 2AM ${brunch} free`);
                free = true;
                //brunch = true;   //once free is true, it no longer runs thru here. 
            }else { //the rest come thru here as free is = true now. 
                alert (`NO FAN PAY VienVenido al CLUBE. time of entry: ${time}:00Hr. Pasela bonito ${brunch}`);
            }
        }       //end2
        
        //close club or brunch 
        //three - if time over 7am && before 11am or edad over 0 and time past 2pm and bfore 10pm 
        else if (edad>0 && time>7 && time<11 || edad>0 && time>14 && time<20) {       //principio4
            alert('we close, mofo. brunch hrs from 11am to 2pm and club hrs from 10pm to 5am')
        }       //fin3
        
        //no under age during club hours 
        //four since is end, we only use else
        else {  
            alert(`son las ${time}:00Hr, deberias de estar DURMIENDO, you are welcome to our ${brunch} `); 
        }       //end4 of just else

    }else{      //if not 24hr format, to please enter correct format
        alert('please enter correct format') 
    }       //end of 24hr format else
}       //close vC

/*openZ     calling function 'validarCliente' with time. 
//commented out as changed to asking for the time. instead of having value there. 
//      from validarCliente (2) to validarCliente (prompt('please enter the time'));
validarCliente (2); //time is 2am
validarCliente (3); //time is 3am 
validarCliente (5); 
validarCliente (4);
validarCliente (3.3);
validarCliente (7);
closeZ */

validarCliente (prompt('please enter the TIME in 24HR format'));       //automated by asking time but FREE stopped working
//PLAYED WITH THIS ALL DAY, I THINK WHT COULD FIX THIS IS TO PULL TIME FROM PC...



