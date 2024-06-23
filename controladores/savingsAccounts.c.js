const {Saving} = require('../db')
// let cuentasAhorro = [
//     {
//         id: 1,
//         nombreDelTitular: 'Juan Pérez', 
//           documentoIdentidad: '12345678',  
//           numeroCuenta: '000123456789',
//           tipoCuenta: 'ahorro',
//           saldoInicial: "1000.00 USD"      
//     },
// ];

class cuentasAhorros{
  async mostrar() {
    try {
      const cuentas = await Saving.findAll();
      return cuentas;
 } catch (error) {
      throw error;
    }
  };
  
  async ingresar(cuenta) {
    try {
        const newAccount = await Saving.create(cuenta);
        return newAccount;
    } catch (error) {
        throw error;
      }
    };
    

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
    };

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