const express = require('express');
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewared => Funciones que se ejecutan cuando se crea nuestro server
        this.middlewares();

        //Rutas de la app
        this.routes();
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y JSON Parser del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`)
        })
    }
}

module.exports = {
    Server
}