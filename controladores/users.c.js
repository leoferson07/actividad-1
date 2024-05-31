let usuariosBD = [
    {
        id: 1,
        nombre: "leoferson",
        constraseña: "123456"
    },
    {
        id: 12,
        nombre: "luis",
        constraseña: "123456"
    },
];
 class usuarios {
    todos(){
        return usuariosBD
    }
    crear(usuario){
        usuariosBD.push(usuario)
    }
    editar(id, nuevosDatos){
        const usuarioIndex = usuariosBD.findIndex(usuario => usuario.id === id);
        if (usuarioIndex !== -1) {
            usuariosBD[usuarioIndex] = { ...usuariosBD[usuarioIndex], ...nuevosDatos };
            return usuariosBD[usuarioIndex];
        } else {
            throw new Error('Usuario no encontrado');
        }
    
    }
    eliminar(id) {
        const numeroId = Number(id)
        const usuarioIndex = usuariosBD.findIndex(usuario => Number(usuario.id) === numeroId);
        if (usuarioIndex !== -1) {
            const usuarioEliminado = usuariosBD.splice(usuarioIndex, 1);
            return usuarioEliminado[0];
        } else {
            throw new Error('Usuario no encontrado');
        }
    }

 }


 module.exports = new usuarios();