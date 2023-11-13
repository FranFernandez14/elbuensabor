import DetalleFactura from "./Detalle.Factura";
import { FormaPago } from "./FormaPago";
import Pedido from "./Pedido";

export default interface Factura {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    fechaFacturacion: Date,
    mpPaymentId: number,
    mpMerchantOrderId: number,
    mpPreferenceId:String,
    mpPaymentType:String,
    formaPago:FormaPago,
    totalVenta:number,
    pedido:Pedido,
    detalles:DetalleFactura
}