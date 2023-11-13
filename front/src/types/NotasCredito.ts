import Factura from "./Factura";
import Persona from "./Persona";



export default interface NotasCredito {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    monto:Number,
    cliente:Persona,
    factura:Factura

}