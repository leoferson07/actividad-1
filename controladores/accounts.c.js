let cuentaPrestamo = [
    {
        id: 1,
        numeroCuenta: "123456789",
        nombreBanco: "Banco Venezuela",
        montoPrestamo: 50000, 
        tasaInteres: 5.5, 
        duracionPrestamoMeses: 60, 
        fechaInicio: "2024-01-01", 
        nombrePrestatario: "leonardo Torres",
        fechaDePago: "2024-06-01"
    }
];

 class Accounts{
    mostrar(){
      return new Promise((res, rej)=>{
        res(cuentaPrestamo);
      })
    };

    crear(cuentas){
        return new Promise((res, rej)=>{
           res(cuentaPrestamo.push(cuentas));
        });
    };

    editar(id, nuevaAccounts){
    return new Promise((resolve, reject) => {
      const numeroId = Number(id)
        const accountsIndex = cuentaPrestamo.findIndex(acc => acc.id === numeroId);
        if (accountsIndex !== -1) {
          cuentaPrestamo[accountsIndex] = { ...cuentaPrestamo[accountsIndex],...nuevaAccounts };
          resolve(cuentaPrestamo[accountsIndex]);
        } else {
          reject(new Error('Esta cuenta no existe'));
        }
      });
    };

    eliminar(id){
      return new Promise((resolve, reject)=>{
           const numeroId = Number(id)
        const accountsIndex = cuentaPrestamo.findIndex(acc => acc.id === numeroId);
        if (accountsIndex !== -1){
          const accountsDelete = cuentaPrestamo.splice(accountsIndex, 1);
          resolve(accountsDelete[0]);
        }else{
          reject(new Error("cuenta no encontrada"));
        }
      });
    };

    mostrarFechasDePago() {
      return new Promise((resol, rej)=>{
        resol( cuentaPrestamo.map(cuenta => cuenta.fechaDePago));
      })
    }
 };
 
 module.exports = new Accounts();