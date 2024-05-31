let cuentasAhorro = [
    {
        id: 1,
        titular: {
          nombre: 'Juan Pérez',
          documentoIdentidad: '12345678', 
          fechaNacimiento: '1980-05-15', 
          direccion: 'Calle Falsa 123, Ciudad, País'
        },
        cuenta: {
          numeroCuenta: '000123456789', // Número único de la cuenta bancaria
          tipoCuenta: 'ahorro',
          saldoInicial: 1000.00, 
          moneda: 'USD', 
          fechaApertura: '2024-05-28' 
        },
        contacto: {
          telefono: '+1234567890',
          email: 'juan.perez@example.com' 
        }
    },
];

class cuentasAhorros{
    mostrar(){
        return new Promise((resolve, reject)=>{
            resolve (cuentasAhorro);
        });
    }
    ingresar(cuenta){
        return new Promise((resolve, reject)=>{
            resolve(cuentasAhorro.push(cuenta))
        });
    }
    editar(id, newAccounts){
        return new Promise((resolve, reject)=>{
            const numeroId = Number(id)
            const index = cuentasAhorro.findIndex(acc => acc.id === numeroId)
            if (index !== -1){
      const cuenta = cuentasAhorro[index];
      if (newAccounts.titular) {
        cuenta.titular = { ...cuenta.titular, ...newAccounts.titular };
      }
      if (newAccounts.cuenta) {
        cuenta.cuenta = { ...cuenta.cuenta, ...newAccounts.cuenta };
      }
      if (newAccounts.contacto) {
        cuenta.contacto = { ...cuenta.contacto, ...newAccounts.contacto };
      }
            cuentasAhorro[index] = cuenta            
            resolve(cuentasAhorro[index])
            }else{
                reject(new Error("cuenta no encontrada"))
            }
        })
    }
    eliminar(id){
        return new Promise((resolve, reject)=>{
            const numeroId = Number(id)
        const index = cuentasAhorro.findIndex(acc => acc.id === numeroId);
        if (index !== -1){
          const accountsDelete = cuentasAhorro.splice(index, 1);
          resolve(accountsDelete[0])
        }else{
            reject(new Error("cuenta no encontrada"));
        }
      })
    }
};

module.exports = new cuentasAhorros();