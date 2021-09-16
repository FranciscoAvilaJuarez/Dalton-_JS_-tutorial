/*
*create 4 apps
*crear prog to decide which app to download. 
*shows how many downloads, and weight, 
*have to be able to install/unistall and open/close
*/

//create class Applicacion
class Applicacion {//open App-class 
    constructor(nombre, descargas, puntuacion, peso){//open conS
        this.nombre = nombre;
        this.descargas = descargas + ' Usuarios';
        this.puntuacion = puntuacion + ' Estrellas';
        this.peso = peso + ' Kb';

        this.iniciada = false; 
        this.instalada = false; 
    }//close cons

    //instalar
    instalar(){
        if(this.instalada == false){
            this.instalada = true; 
            alert ( `App ${this.nombre} esta instalada`)
        }//close if
    };//close instalar

    //abrir method 
    abrir(){
        if (this.iniciada == false && this.instalada == true ){
            this.iniciada = true; 
                alert(`App ${this.nombre} esta abierta`); 
        }//close if 
    };//close abrir

    //cerrar
    cerrar(){
        if( this.iniciada == true && this.instalada == true ){
            this.iniciada == false; 
            alert(` App ${this.nombre} esta cerrada`); 
        }//close if
    }//close cerrar

    //desinstalar
    desinstalar(){
        if(this.instalada == true){
            this.instalada == false; 
            alert(`App ${this.nombre} esta desInstalada`)
        }//close if
    };//close desinstalar

    //show info
    showInfo(){
        return `<b>
                App:  ${this.nombre}<br>
                Descargas: ${this.descargas}<br>
                Rate: ${this.puntuacion}<br>
                Peso ${this.peso}<br>
                </b>`;  
    }//close showInfo
};//close Applicacion-class


//      give nombre,descargas, puntuacion, peso
let app = new Applicacion('insta', '90', '8', '950' ); 
let app2 = new Applicacion('facebok', '150', '9', '1050')


//      make more apps to compare
//                      nombre, descargas, puntuacion, peso
let app3 = new Applicacion('tok-tik', '300', '6.9', '700'); 
let app4 = new Applicacion('WaSSup', '1000', '8.9', '300'); 
let app5 = new Applicacion('Massenger', '989', '7.9', '600');

//  call app1 to do 'X' 
app.instalar();
app.abrir();
app.cerrar();
app.desinstalar(); 

//  call app5 to do 'X' 
app5.instalar();
app5.abrir();
app5.cerrar();
app5.desinstalar(); 


//  show apps information 
document.write (` 
    ${app.showInfo()}<br>
    ${app2.showInfo()}<br>
    ${app3.showInfo()}<br>
    ${app4.showInfo()}<br>
    ${app5.showInfo()}<br>
`);

 



