/*
*create 4 apps
*crear prog to decide which app to download. 
*shows how many downloads, and weight, 
*have to be able to install/unistall and open/close
*/

class Applicacion {//open App-class 
    constructor(nombre,descargas, puntuacion, peso){//open conS
        this.nombre = nombre;
        this.descargas = descargas + ' usuarios'; 
        this.puntuacion = puntuacion + ' estrellas'; 
        this.peso = peso + 'Kb'; 

        this.iniciada = false; 
        this.instalada = false; 
    }//close cons

    //instalar
    instalar(){
        if(this.instalada == false){
            this.instalada = true; 
            alert ( `${this.nombre} 1 instalar-esta instalada`)
        }//close if
    };//close instalar

    //abrir method 
    abrir(){
        if (this.iniciada == false && this.instalada == true ){
            this.iniciada = true; 
                alert(`${this.nombre} 2 abrir-esta abierta`); 
        }//close if 
    };//close abrir

    //cerrar
    cerrar(){
        if( this.iniciada == true && this.instalada == true ){
            this.iniciada == false; 
            alert(`${this.nombre} 3 cerrar-esta cerrada`); 
        }//close if
    }//close cerrar

    //desinstalar
    desinstalar(){
        if(this.instalada == true){
            this.instalada == false; 
            alert(`${this.nombre} 4 desinstalar-esta desInstalada`)
        }//close if
    };//close desinstalar
};//close App-class


//      nombre,descargas, puntuacion, peso
let app = new Applicacion('istagram', '90', '8', '950' ); 


//call app
app.instalar();
app.abrir();
 app.cerrar();
app.desinstalar();  





