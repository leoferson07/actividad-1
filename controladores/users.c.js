let usuariosBD = [
    {
        id: 1,
        nombre: "leonardo Torres",
        contraseña: "123456"
    },
    {
        id: 2,
        nombre: "Maria Perez",
        contraseña: "123456"
    },
];
 class usuarios {
    todos(){
        return new Promise((resolve, reject)=>{
            resolve(usuariosBD)
        })
    };

    crear(usuario){
        return new Promise((resolve, reject)=>{
            resolve( usuariosBD.push(usuario))
        })
    };

    editar(id, nuevosDatos){
        return new Promise((resolve, reject)=>{
            const numeroId = Number(id)
            const usuarioIndex = usuariosBD.findIndex(usuario => usuario.id === numeroId);
            if (usuarioIndex !== -1) {
                usuariosBD[usuarioIndex] = { ...usuariosBD[usuarioIndex], ...nuevosDatos }
                resolve(usuariosBD[usuarioIndex])
            }else{
                reject(new Error('Usuario no encontrado'))
            }
        })
    };

    eliminar(id) {
        return new Promise((resolve, reject)=>{
            const numeroId = Number(id)
            const usuarioIndex = usuariosBD.findIndex(usuario => Number(usuario.id) === numeroId);
            if (usuarioIndex !== -1) {
                const usuarioEliminado = usuariosBD.splice(usuarioIndex, 1);
                resolve(usuarioEliminado[0])
            }else{
                reject(new Error('Usuario no encontrado'))
            }
        })
    };
 };


 module.exports = new usuarios();