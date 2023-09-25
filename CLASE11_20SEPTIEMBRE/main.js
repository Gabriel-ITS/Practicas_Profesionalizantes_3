async function solicitar(){

    const lista = await fetch("https://dolarapi.com/v1/dolares")
 
    //convertir los datos recibidos en una expresion nativa de javascript
    const lista_definitiva = await lista.json()

    //console.log(lista_definitiva)
 
 //recorrer array con forEach
     lista_definitiva.forEach( (lista) => {
      //console.log(index+'-'+element)
      console.log(lista)
     });
 
 }
 
