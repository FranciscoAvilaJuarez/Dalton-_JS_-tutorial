/*
*show CELLPHONE CHAR of 3
*model, color, display, OS, camera, memoria, ram
*have to turn on, restart, take pictures y record. 

add already existing options from (1) onto new phones having more better options, 
*seguridad, slowmoRecord, size, RAM

NEW
*seguridad: 
        *faceSeguridadseguridad: TrueDepth camera for facial recognition
        IF Xiaomi 10T 5G + faceSeguridadseguridad
        *fingerprintSeguridadseguridad: Side-mounted sensor
*slowmoRecord: 1080p slow motion recording 960fps
*size = 165.1mm 

CHANGE
*RAM: 8 and 12

Apple iPhone 12.
    color: Graphite, 
    display: 6.7‑inch OLED display,
    OS: A14 Bionic chip Next‑generation Neural Engine,  
    cemera: Pro 12MP 
    memoria: 512GB   

Samsung Galaxy Z Fold 2
    color: Bronze, 
    display: 120Hz, 7.6 Dynamic AMOLED 2x, 
    OS: Octa-Core 3.09 GHz, 
    camera: 10 MP, 
    memoria: 256GB

Xiaomi 10T 5G
    color:Negro cósmico, 
    display: 144Hz 6.67‑inch DotDisplay, 
    OS: Qualcomm® Snapdragon™ 865, 
    camera: 108MP
    memoria: 256GB, 

*/

class CELLPHONE {       //open CELLPHONE-class
    constructor(model, color, display, OS, camera, memoria, ram) {      //open cells-constructor
        this.model = model;
        this.color = color; 
        this.display = display; 
        this.OS = OS; 
        this.camera = camera; 
        this.memoria = memoria; 
        this.ram = ram;
        
        this.power = false; 
    }//close cells-constructor

    powerButton() {      //open powerButton
        if (this.power == false){      
            alert ( `turnnig ${this.model} powerButton-on` ); 
            this.power = true; 
        }
        else if (this.power == true){
            alert(`${this.model} powerButton-is already on`)
        }
        else{ alert( this.model +' powerButton-is already off' ) };
    }//close powerButton

    restart() {     //open restart
        if(this.power == true){
            alert(`Reiniciando ${this.model}`); 
            this.power = false;//turn off
            this.power = true; //turn BACK ON
        }else{ alert( this.model +' restart-is already off' ) }
    }//close restart

    takePicture() {      //open takePicture
        if (this.power == true){
            alert (`${this.model} Foto tomada en una resolucion de ${this.camera}MP`)
        }
        else { alert (`${this.model} is takePicture-turned off`)} 
    }//close takePicture

    grabar() {       //open grabar
        if(this.power == true){
            alert(`${this.model} video grabado con camara ${this.camera}MP`)
        }else{ alert( this.model +' is grabar-turned off' ) }
    }//close grabar

    showInfo() {        //open showInfo
        return `Tech Specs for <b>${this.model}: </b><br>    
                color: <b>${this.color} </b><br>
                display: <b>${this.display} </b><br>
                OS: <b>${this.OS} </b><br>
                camara: <b>${this.camera}MP </b><br>
                memoria interna: <b>${this.memoria}GB </b><br>
                RAM: <b>${this.ram}MB </b><br><br>`;
    }//close showInfo
}//close CELLPHONE-class


//open new class UPGRADES to add new options 'seguridad, slowmoRecord, size,' and change 'RAM'
// seguridad, slowmoRecord, size, RAM
class UPGRADES extends CELLPHONE {       //open class-UPGRADES
    
    constructor( model, color, display, OS, camera, memoria, ram, slowmoRecord, seguridad, size, power ){//open cons
        super( model, color, display, OS, camera, memoria, ram, power ); 
            
            this.slowmoRecord = slowmoRecord; 
            this.seguridad = seguridad; 
            this.size = size; 

            this.power == true;
    }//close cons

    set setRAM (newRAM){        //open setRam
        this.ram = newRAM; 
    }//close setRam

    Cellseguro() {       //open seguridad-method
        if (this.power == false){
            this.power = true;
            alert ( `${this.model} UG recognzing face with: ${this.seguridad}` )
        }
        else { alert ( `${this.model}UG recognzing face with: ${this.seguridad}`)}
    }//close seguridad-method

    GrabarLento(){     //open grabarLento-method
        if( this.power == false ) {      //open if-lento
            this.power = true;
            alert (`${this.model} UG estas grabando con camara de: ${this.slowmoRecord}`);
        }//close if-lento
        else { alert( `${this.model} UG estas grabando con camara de: ${this.slowmoRecord}` ) }
    }//close grabarLento-method

    CellUpgrade() {     //open cellUpgrade
        return this.showInfo() + ` UG seguridad: <b>${this.seguridad}</b><br>
        UG resolucion de camara lenta <b>${this.slowmoRecord}</b><br>
        UG tamaño: <b>${this.size}</b><br>`; 
    }//close cellUpgrade

}//close class-UPGRADES


// add values 
//              model, color, display, OS, camera, memoria, ram
let cell1 = new CELLPHONE( 'Apple iPhone 12', 'Graphite', '6.7‑inch OLED display', 'A14 Bionic chip Neural Engine', 'Pro 12', '512', '6' );

let cell2 = new CELLPHONE( 'Samsung Galaxy Z Fold 2', 'Bronze', '120Hz, 7.6 Dynamic AMOLED 2x', 'Octa-Core 3.09 GHz', '10', '256', '6' );

let cell3 = new CELLPHONE( 'Xiaomi 10T 5G', 'Negro Cósmico', '144Hz 6.67‑inch DotDisplay', 'Qualcomm Snapdragon 865', '108', '256', '6' );

/*
//call 
cell1.powerButton();//power on
cell1.takePicture();//take picture
cell1.restart();//reboot
cell1.grabar(); //record
cell1.powerButton();//power off
*/


//to  show info
//              gets call it this way, as we use 'return' in 'showInfo ()' 
document.write(` 
    ${cell1.showInfo()} <br>
    ${cell2.showInfo()} <br>
    ${cell3.showInfo()} <br>
`); 


// new added features only to cell2 and 3 
cell2 = new UPGRADES('Samsung Galaxy Z Fold 2', 'Bronze', '120Hz, 7.6 Dynamic AMOLED 2x', 'Octa-Core 3.09 GHz', '10', '256', '8', '1080p slow motion recording 960fps', 'TrueDepth camera for facial recognition', '165.1mm'); 

cell3 = new UPGRADES( 'Xiaomi 10T 5G', 'Negro cósmico', '144Hz 6.67‑inch DotDisplay', 'Qualcomm Snapdragon 865', '108', '256', '12', '1080p slow motion recording 960fps',  'TrueDepth camera for facial recognition', '165.1mm' );


/*
document.write ( `
    ${cell1.showInfo()} <br>
    ${cell2.CellUpgrade()} <br>
    ${cell3.CellUpgrade()} <br>
`)
*/

//cell1
cell1.powerButton();//power on
cell1.takePicture();//take picture
cell1.restart();//reboot
cell1.grabar(); //record
//cell1.GrabarLento();//doesnt work. doesnt exist 
//cell1.Cellseguro();//doesnt work, doesnt exist 
cell1.powerButton();//power off 

//cell2
cell2.powerButton();//power on
cell2.takePicture();//take picture
cell2.restart();//reboot
cell2.grabar(); //record
cell2.Cellseguro();
cell2.GrabarLento(); 
cell2.powerButton();//power off

//cell3
cell3.powerButton();//power on
cell3.takePicture();//take picture
cell3.restart();//reboot
cell3.grabar(); //record
cell3.Cellseguro();
cell3.GrabarLento(); 
cell3.powerButton();//power off
