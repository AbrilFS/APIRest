
//1. creamos una variable const donde gaurdaremos la URL que queremos jalar.
const API_URL_RANDOM = " https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_9apQSZpNSuP47RFiTEXCT9mqGiHTa71dHtpG6LDSh8i43mRfQqieBcvDAkuU6yR9";

const API_URL_FAV = " https://api.thecatapi.com/v1/images/favourites?limit=2&api_key=live_9apQSZpNSuP47RFiTEXCT9mqGiHTa71dHtpG6LDSh8i43mRfQqieBcvDAkuU6yR9";

const spanError= document.getElementById("error")

 async function loadRandomMichis(){
    const res = await fetch (API_URL_RANDOM); //llamamos a la API
    //convertimos en sintaxis que JS pueda entender con .json
    const data= await res.json();
    
        console.log("Random");
        console.log(data)

        if(res.status !== 200){ //condicional para mostrar errores de HTTP
            spanError.innerHTML="Hubo un error" + res.status;
        } else {
            const img1 = document.getElementById('img1'); //tomamos el nodo img del HTML mediante el DOM para renderizar.
            const img2 = document.getElementById('img2');
        
            img1.src = data[0].url; //le decimos que el src de la img, sea la url del objeto json.
            img2.src = data[1].url;
        }     
    }

 async function loadFavMichis(){
    const res = await fetch (API_URL_FAV); 
    const data= await res.json();
            console.log("Favoritos")
            console.log(data)
    
    
    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
        }
    
    }

 loadRandomMichis(); //llamamos a la función para que la img no nos salga vacía al entrar a la página.

 loadFavMichis();
