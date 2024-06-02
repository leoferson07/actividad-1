let estadosDeCuentas = [
    {
        id: 1,
        nombre: "leonardo Torres", 
        cuentasPrestamo: "2000$",
        cuentasAhorro: "4000$",
        tasasDeIntereses: 0.04,
        resumen: [
            {
                capitalTotal: "6000$",
                cooperativa: "Cooperativa A"
            }
        ]
    }, 
    {
        id: 2,
        nombre: "Maria Perez", 
        cuentaPrestamo: "1000$",
        cuentaAhorro: "2000$",
        tasasDeIntereses: 0.02,
        resumen: [
            {
                capitalTotal: "3000$",
                cooperativa: "Cooperativa A"
            }
        ]
    }

];

class State{
    mostrar(){
    return new Promise((resolve, reject)=>{
        resolve(estadosDeCuentas)
    })
    }
}

module.exports = new State();