var express = require('express');
var router = express.Router();
const accounts = require("../controladores/accounts.c");

router.get('/', function(req, res){
  accounts.mostrar()
  .then((resul) =>{
    res.send(resul)
  })
})

router.post('/', function(req, res, next) {
  accounts.crear(req.body)
  .then(()=>{
    accounts.mostrar()
    .then((resul)=>{
      res.send(resul);
    })
  })
});

router.put('/:id', function(req, res){
  const id = req.params.id;
  const nuevaAccounts = req.body;
  accounts.editar(id, nuevaAccounts)
  .then((accountsAct)=>{
    res.send(accountsAct);
  })
});

router.delete('/:id', function(req, res){
  const id = req.params.id;
  accounts.eliminar(id)
  .then(()=>{
    res.send({ message: 'cuenta eliminada'})  
  })
});

router.get('/:fechas-de-pago', function(req, res){
  accounts.mostrarFechasDePago()
  .then((resul)=>{
    res.send({ fechasDePago: resul })
  })
});

module.exports = router;