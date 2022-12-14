const express = require('express') 
const pool = require('./db/connection'); 
const mantenimientoRouter = require('./routes/helpdesktop')

const cors = require('cors') 

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
        mantenimiento:"/api/v1/mantenimiento"
        }
        
        this.middlewares()
        this.routes()
    }

    routes(){
        this.app.use(this.paths.mantenimiento, mantenimientoRouter)
  }

  middlewares(){
    this.app.use(cors())//habilita origen crusado
    this.app.use(express.json())
  } 
  
  listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto 4000', this.port)
        })
    }
}

module.exports = Server