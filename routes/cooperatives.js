var express = require('express');
var router = express.Router()
var gruposC = require('../controladores/cooperatives.c');

router.post('/', async (req, res) => {
  const nuevosGrupos = req.body;

  try {
    const grupos = await gruposC.ingresar(nuevosGrupos);
    res.status(201).send({ message: "Grupos de cooperativas agregados correctamente", grupos });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
// router.post('/', function(req, res){
//   const nuevosGrupos = req.body;
//   gruposC.ingresar(nuevosGrupos)
//     .then(grupos => {
//       if (!res.headersSent) {
//         res.status(201).send({ message: "Grupos de cooperativas agregados correctamente", grupos });
//       }
//     })
//     .catch(error => {
//       if (!res.headersSent) {
//         res.status(400).send({ error: error.message });
//       }
//     }) 
//   });
  
router.get('/', async (req, res) => {
  try {
    const cooperativas = await gruposC.mostrar();
    res.send(cooperativas);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
  
  router.delete('/:nombreGrupo/usuarios/:nombreUsuario', function(req, res){
    const { nombreGrupo, nombreUsuario } = req.params;
     gruposC.eliminarUsuarios(nombreGrupo, nombreUsuario)
      .then((grupo)=>{
        res.send({ message: "Usuario eliminado correctamente", grupo });
      })  
  });



module.exports = router;