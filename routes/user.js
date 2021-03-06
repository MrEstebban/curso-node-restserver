const {Router} = require('express');
const { usuariosGET, usuariosPUT, usuariosPOST, usuariosDELETE, usuariosPATCH } = require('../controllers/users');

const router = Router();

router.get('/', usuariosGET );

router.put('/:id/:id2', usuariosPUT);

router.post('/', usuariosPOST);

router.delete('/', usuariosDELETE);

router.patch('/', usuariosPATCH);


module.exports = router;