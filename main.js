
//1. creamos una variable const donde gaurdaremos la URL que queremos jalar.
const API_URL_RANDOM = " https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_m5WVjh8WDktqF6Av3UiYrYjbC8W9Apr8nVYrxAQApktG62PAvihGIvhjb7LjMzAg";

const API_URL_FAV = " https://api.thecatapi.com/v1/favourites?api_key=live_m5WVjh8WDktqF6Av3UiYrYjbC8W9Apr8nVYrxAQApktG62PAvihGIvhjb7LjMzAg";

const API_URL_FAV_DELETE = (id) =>`https://api.thecatapi.com/v1/favourites/${id}favouriteId?api_key=live_9apQSZpNSuP47RFiTEXCT9mqGiHTa71dHtpG6LDSh8i43mRfQqieBcvDAkuU6yR9`;

const spanError= document.getElementById("error") //se invoca en caso de que el status de nuestro llamado al API sea distinto a 200

 async function loadRandomMichis(){
    const res = await fetch (API_URL_RANDOM); //llamamos a la API
    const data= await res.json(); //convertimos en sintaxis que JS pueda entender con .json
    
        console.log("Random");
        console.log(data)

        if(res.status !== 200){ //condicional para mostrar errores de HTTP
            spanError.innerHTML="Hubo un error" + res.status;
        } else {
            const img1 = document.getElementById('img1'); //tomamos el nodo img del HTML mediante el DOM para renderizar.
            const img2 = document.getElementById('img2');
            const btn1 = document.getElementById('btn1');
            const btn2 = document.getElementById('btn2');
        
            img1.src = data[0].url; //le decimos que el src de la img, sea la url del objeto json.
            img2.src = data[1].url;

            btn1.onclick = () => saveFavMichis(data[0].id);
            btn2.onclick = () => saveFavMichis(data[1].id); //Usa (() => save(data.id)) si lo que quieres es que la acción ocurra cuando se haga clic, no al cargar el script.
        }   

    }

 async function loadFavMichis(){
    const res = await fetch (API_URL_FAV); 
    const data= await res.json();
            console.log("Favoritos")
            console.log(data)
    
    
    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
        } else {
            const section = document.getElementById('favMichis')
            section.innerHTML = "";

            const h2 = document.createElement('h2');
            const h2Text = document.createTextNode('Michis favoritos');
            h2.appendChild(h2Text);
            section.appendChild(h2);
        
            data.forEach(michi => {
              //const section = document.createElementById('favMichis')
              const article = document.createElement('article');
              const img = document.createElement('img');
              const btn = document.createElement('button');
              const btnText = document.createTextNode('Sacar al michi de favoritos');
        
              img.src = michi.image.url;
              img.width = 150;
              btn.appendChild(btnText);
              btn.onclick = () => deleteFavouriteMichi(michi.id);
              article.appendChild(img);
              article.appendChild(btn);
              section.appendChild(article);
            });
        }
    
    }


    //PETICIÓN POST PARA AGREGAR MICHIS FAVORITOS
    async function saveFavMichis(id){
        const res = await fetch(API_URL_FAV,{
            method: 'POST',  //debemos especificar el método porque por defect es GET
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image_id: id
            }),
        })
        const data = await res.json();  //convertimos en sintaxis que JS pueda entender con .json

        console.log('Save')
        console.log(res)

    if (res.status !== 200) {  // con este if, podemos ver los errores en el display
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
        }
        else {
            console.log('Michi guardado en favoritos')
            loadFavMichis();
          }
    }


    //PETICION DELETE PARA ELIMINAR MICHIS FAVORITOS

    async function deleteFavouriteMichi(id) {
        const res = await fetch(API_URL_FAV_DELETE(id), {
          method: 'DELETE',
        });
        const data = await res.json();
      
        if (res.status !== 200) {
          spanError.innerHTML = "Hubo un error: " + res.status + data.message;
        } else {
          console.log('Michi eliminado de favoritos')
          loadFavMichis();
        }
      }



 loadRandomMichis(); //llamamos a la función para que la img no nos salga vacía al entrar a la página.

 loadFavMichis();
