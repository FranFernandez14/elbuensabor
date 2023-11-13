import Factura from "./Factura";
import Persona from "./Persona";

export default interface DetalleFactura {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    monto: number,
    cliente:Persona,
    factura: Factura
}