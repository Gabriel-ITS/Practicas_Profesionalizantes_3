const mariadb = require('mariadb')

const parametros = mariadb.createPool({
    host:'localhost',
    port:3307,
    user:'root',
    password:'1234',
    database:'prueba_cliente'
})

async function obtener_conexion(){
    const conexion = await parametros.getConnection()
    return conexion
}

module.exports = { obtener_conexion }   