var express = require('express');
var router = express.Router();
const usuarios = require('../controladores/users.c')


router.get('/', function(req, res, next) {
  res.send(usuarios.todos());
});

router.post("/", function(req, res){
usuarios.crear(req.body);
res.send(usuarios.todos())
})

router.put('/:id', function(req, res){
  const id = req.params.id;
  const nuevosDatos = req.body;
  const usuarioActualizado = usuarios.editar(id, nuevosDatos);
        res.send(usuarioActualizado);
})

router.delete('/:id', function(req, res){
  const id = req.params.id;
   usuarios.eliminar(id);
      res.send({ message: 'Usuario eliminado' });
 
});


module.exports = router;
