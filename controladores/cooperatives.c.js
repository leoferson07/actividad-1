const {cooperative, Miembros} = require('../db');
// let grupos = [
//   {
//     "nombreCooperativa": "Cooperativa A",
//     "miembros": [
//       {
//         "nombre": "leonardo Torres",
//         "cargo": "Presidente",
//         "edad": 40
//       },
//       {
//         "nombre": "María Perez",
//         "cargo": "Tesorera",
//         "edad": 35
//       }
//     ]
//   },
//   {
//     "nombreCooperativa": "Cooperativa B",
//     "miembros": [
//       {
//         "nombre": "Pedro García",
//         "cargo": "Presidente",
//         "edad": 45
//       },
//       {
//         "nombre": "Ana López",
//         "cargo": "Secretaria",
//         "edad": 38
//       }
//     ]
//   }
// ];

class gruposC{
  async ingresar(nuevosGrupos) {
    if (!Array.isArray(nuevosGrupos) || nuevosGrupos.length === 0) {
      throw new Error("Debe enviar un array de cooperativas");
    }

    const resultado = [];

    for (const grupo of nuevosGrupos) {
      const nuevaCooperativa = await cooperative.create({ nombre: grupo.nombreCooperativa });
      for (const miembro of grupo.miembros) {
        await Miembros.create({ ...miembro, cooperativaId: nuevaCooperativa.id });
      }
      resultado.push(nuevaCooperativa);
    }

    return resultado;
  }

  //  ingresar(nuevosGrupos) {
  //     return new Promise((resolve, reject) => {
  //       if (!Array.isArray(nuevosGrupos) || nuevosGrupos.length === 0) {
  //         return reject(new Error("Debe enviar un array de cooperativas"));
  //       } else {
  //           nuevosGrupos.forEach((grupo) => {
  //             grupos.push(grupo);
  //           });
  //           resolve(grupos);         
  //       }
  //     })
  //     };
    
  async mostrar() {
    try {
      const cooperativas = await cooperative.findAll({
        include: Miembros
      });
      return cooperativas;
    } catch (error) {
      throw error;
    }
  }

      eliminarUsuarios(nombreGrupo, nombreUsuario){
        return new Promise((resolve, reject)=>{
          const grupo = grupos.find(grupo => grupo.nombreCooperativa === nombreGrupo);
          if (!grupo) {
            reject(new Error("Grupo no encontrado"));
          }
          const usuarioIndex = grupo.miembros.findIndex(usuario => usuario.nombre === nombreUsuario);
          if (usuarioIndex === -1) {
            reject( new Error("Usuario no encontrado"));
          }
          grupo.miembros.splice(usuarioIndex, 1);
          resolve(grupo);

        })
    }
 };

module.exports = new gruposC();