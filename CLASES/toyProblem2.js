/*
*create 4 apps
*crear prog to decide which app to download. 
*shows how many downloads, and weight, 
*have to be able to install/unistall and open/close
*/

class App {//open App-class 
    constructor(descargas, puntuacion, peso){//open conS
        this.descargas = descargas; 
        this.puntuacion = puntuacion; 
        this.peso = peso; 

        this.iniciada = false; 
        this.instalada = false; 
    }//close cons

    //abrir method 
    abrir(){
        if (this.iniciada == false){
            this.iniciada = true; 
            if ( this.iniciada == true){//validate is true after changing to true
                alert(`${this.app} iniciada`); 
            }
        }
    };//close abrir

    //cerrar
    cerrar(){
        if(this.iniciada == true){
            this.iniciada == false; 
            if( this.iniciada == false){//validate is false after changing to false
                alert(`${this.app} apagada`); 
            };
        };
    };//close cerrar

    //instalar
    instalar(){
        if(this.instalada == false){
            this.instalada = true; 
            if ( this.instalada == true ){//validate is true after changing to true
                alert ( `${this.app} esta instalada`)
            }
        }
    };//close instalar

    //desinstalar
    desinstalar(){
        if(this.instalada == true){
            this.instalada == false; 
            if ( this.instalada == false ){//validate is false after changing to false
                alert(`${this.app} esta desInstalada`)
            }
        }
    };//close desinstalar

};//close App-class