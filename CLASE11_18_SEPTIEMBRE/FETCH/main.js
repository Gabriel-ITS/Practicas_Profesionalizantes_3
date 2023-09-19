function solicitar(){

     const async lista = await fetch("")

    //convertir los datos recibidos en una expresion nativa de javascript
    const lista_definitiva = lista.json()

    lista_definitiva.forEach(element => {
        console.log(element)
    });
}