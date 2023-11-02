const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

//nuestra API va a proporsionar los datos en dicha notacion
server.use(express.json())

server.use(cors())

server.use(morgan('dev'))

server.use(require('./routes/cliente.route'))

server.set('port',process.env.PORT || 3001)

//ponemos enmarcha el servidor
server.listen(server.get('port'))

console.log('Servidor corriendo en puerto: ',server.get('port'))


