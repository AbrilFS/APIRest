
//1. creamos una variable const donde gaurdaremos la URL que queremos jalar.

const URL = " https://api.thecatapi.com/v1/images/search";

//2. Ponemos la URL como argumento de la función fetch. Esta llamada nos devuelve una promesa.
fetch (URL)
 //3. El método then() de esa promesa nos entrega un objeto response.
 //A partir de este objeto llamamos al método json() para obtener el cuerpo de la respuesta. Este método json() nos devuelve otra promesa que se resolverá cuando se haya obtenido el contenido.
    .then (res => res.json())
 //4. El método then() de esta segunda promesa recibe el cuerpo devuelto por la promesa anterior 
    .then(data => {
    const img = document.querySelector('img'); //tomamos el nodo img del HTML mediante el DOM

    img.src = data[0].url; //le decimos que el src de la img, sea la url del objeto json.
    
 });

 