document.addEventListener("DOMContentLoaded", main);

function main(){

    let numeros = document.querySelectorAll(".numeros div span");
    let circulos = document.querySelectorAll(".circulos div span");
    let potenciasFuegos = document.querySelectorAll(".potencia div span");

    let btnEncender = document.querySelector(".encenderApagar");
    let btnmasPotencia = document.querySelector(".masPotencia");
    let btnmenosPotencia = document.querySelector(".menosPotencia");

    let fuegoSeleccionado = null;

    if(btnEncender){
        btnEncender.addEventListener("click",()=>{
            if(!btnEncender.classList.contains("encendidoBotones")){
                btnEncender.classList.add("encendidoBotones");
                
                numeros.forEach((numero, index) => {
                    numero.addEventListener("click",()=> {
                        numero.classList.add("encendidoBotones");
                        circulos[index].classList.add("encendidofuego");
                        fuegoSeleccionado = index;
                    });
                });

                btnmasPotencia.addEventListener("click",()=>{
                    if(potenciasFuegos[fuegoSeleccionado].textContent < 9){
                        potenciasFuegos[fuegoSeleccionado].textContent++;
                    }
                    potenciasFuegos[fuegoSeleccionado].classList.add("encendidoBotones"); 
                });

                btnmenosPotencia.addEventListener("click",()=>{
                    if(potenciasFuegos[fuegoSeleccionado].textContent > 0){
                        potenciasFuegos[fuegoSeleccionado].textContent--;
                    }
                    potenciasFuegos[fuegoSeleccionado].classList.add("encendidoBotones"); 
                });

            } else {
                window.location.reload();
            }
        });
    }


    }