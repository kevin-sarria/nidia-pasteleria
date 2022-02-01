
let barra = document.querySelector('.barra');

let medirScroll;

let pantalla;


window.setInterval(
    () => {  
        medirScroll = window.scrollY;

        pantalla = window.screen.width;


        if( pantalla >= 800 ) {
            if(medirScroll >= 200) {
                barra.style.background = "#f97370";
            }else {
                barra.style.background = "transparent";
            }
        }else{
            if(medirScroll >= 100) {
                barra.style.background = "#f97370";
            }else {
                barra.style.background = "transparent";
            }
        }

        
        
    }, 100)

    









