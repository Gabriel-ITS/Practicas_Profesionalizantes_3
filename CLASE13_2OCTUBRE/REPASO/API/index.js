const express = require('express')


//ejecutamos express y nos retorna funcionalidades
const server = express()

//especificamos puerto donde correra nuestro servidor
server.set('port',3000)

//Ponemos en marcha nuestro servidor en el puerto 3000
server.listen( server.get('port') )

console.log('Servidor corriendo en el puerto: ', server.get('port'))