const {request, response} = require('express');

const usuariosGET = (req = request, res = response) => {

    const {q, nombre = 'No name', apikey} = req.query;

    res.status(200).json({res: 'GET API - Controller', q, nombre, apikey});
};

const usuariosPOST = (req, res = response) => {

    const body = req.body;
    res.status(200).json({res: 'POST API - Controller', body });
};

const usuariosPUT = (req = request, res = response) => {

    const {id, id2} = req.params;

    res.status(200).json({res: 'PUT API - Controller', id, id2});
};

const usuariosPATCH = (req, res = response) => {
    res.status(200).json({res: 'PATCH API - Controller'});
};

const usuariosDELETE = (req, res = response) => {
    res.status(200).json({res: 'DELETE API - Controller'});
};

module.exports = {
    usuariosGET,
    usuariosPOST,
    usuariosPUT,
    usuariosPATCH,
    usuariosDELETE
}