var express = require('express');
var router = express.Router();
const usuarios = require('../controladores/users.c')

router.get('/', function(req, res, next) {
  usuarios.todos()
    .then((resul) => {
      res.render('users', { usuarios: resul });
    })
});
//!ruta para mostrarlo en el thunder client
// router.get('/', function(req, res, next) {
//  usuarios.todos()
//  .then((resul)=>{
//   res.send(resul)
//  })
// });

router.post("/", function(req, res){
usuarios.crear(req.body)
.then(()=>{
  usuarios.todos()
  .then((resul)=>{
    res.send(resul)
    })
  })
});

router.put('/:id', function(req, res){
  const id = req.params.id;
  const nuevosDatos = req.body;
   usuarios.editar(id, nuevosDatos)
   .then((resul)=>{
    res.send(resul)
   })
});

router.delete('/:id', function(req, res){
  const id = req.params.id;
   usuarios.eliminar(id)
   .then(()=>{
     res.send({ message: 'Usuario eliminado' });
  })
 });



module.exports = router;
