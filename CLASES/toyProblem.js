/*
*show CELLPHONE CHAR of 3
*color, display, OS, camara, memoria interna, RAM6 (1)
*have to turn on, restart, take pictures y record. 

add already existing options from (1) onto new phones having more better options, 
*face recon, record slowmo, extra camera, RAM8 and RAM12
*Enabled by TrueDepth camera for facial recognition
*slowMo: 1080p slow motion recording 960fps
*Side-mounted fingerprint sensor
*size = 165.1mm 

apps of 4 apps
*crear prog to decide which app to download. 
*shows how many downloads, and weight, 
*have to be able to install/unistall and open/close

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
    
Samsung Galaxy S21 Ultra
    color: black, 
    display: 6.8‑inch Dynamic AMOLED 2x, 
    OS: Octa-Core 2.9 GHz, 
    camera: 40 MP, 
    memoria: 128GB
*/

class cells {       //open cell
    constructor(color, display, OS, camera, memoria, ram){      //open polin
        this.color = color; 
        this.display = display; 
        this.OS = OS; 
        this.camera = camera; 
        this.memoria = memoria; 
        this.ram = ram 
        this.on = false; 
    }//close polin
    turn_on(){      //open on 
            if (this.on == false){      //open if-on
                alert ('this is turned on'); 
                on = true; 
            }//close if-on
            else { alert('the cell is already on...'); }//else if-on
    }//close on
    turn_off(){     //open off
        if (this.on == true){       //open if-off
            alert ('turned off'); 
            on == false; 
        }//close if-of
        else { alert('the cell is already off')};//else if-off  
    }//close off
}//close cell

