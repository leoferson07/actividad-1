var express = require('express');
var router = express.Router();
const State = require('../controladores/userState.c');

router.get('/', function(req, res){
  State.mostrar()
  .then((resul)=>{
    res.send(resul)
  })
});

module.exports = router;
