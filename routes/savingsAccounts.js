var express = require('express');
var router = express.Router();
const cuentasAhorro = require("../controladores/savingsAccounts.c");

router.get('/', function(req, res){
    cuentasAhorro.mostrar()
    .then((resul)=>{
        res.send(resul)
    })
});

router.post('/', function(req, res){
    cuentasAhorro.ingresar(req.body)
    .then(()=>{
        cuentasAhorro.mostrar()
        .then((resul)=>{
            res.send(resul)
        })
    })
});

router.put('/:id', function(req, res){
    const id = req.params.id;
    const newAccounts = req.body;
    cuentasAhorro.editar(id, newAccounts)
    .then((acc)=>{
        res.send(acc)
    })
});

router.delete('/:id', function(req, res){
    const id = req.params.id;
    cuentasAhorro.eliminar(id)
    .then(()=>{
        res.send({ message: 'cuenta eliminada'})
    })
})

module.exports = router;