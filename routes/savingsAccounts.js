var express = require('express');
var router = express.Router();
const cuentasAhorro = require("../controladores/savingsAccounts.c");


router.get('/', async (req, res) => {
    try {
      const result = await cuentasAhorro.mostrar();
      res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  router.post("/", async (req, res)=>{
    try {
        const {id, nombreDelTitular, documentoIdentidad, numeroCuenta, tipoCuenta, saldoInicial} = req.body;
        const newAccount = await cuentasAhorro.ingresar({
            id, nombreDelTitular, documentoIdentidad, numeroCuenta, tipoCuenta, saldoInicial
        });
        res.status(200).send(newAccount);
    } catch (error) {
        res.status(404).send(error)
    }
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