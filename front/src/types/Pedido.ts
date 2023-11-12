import DetallePedido from "./DetallePedido";
import { EstadoPedido } from "./EstadoPedido";
import { FormaPago } from "./FormaPago";
import { TipoEnvio } from "./TipoEnvio";

export default interface Pedido {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    fechaPedido: Date,
    horaEstimadaFinalizacion: Date,
    total: number,
    totalCosto: number,
    estadoActual: EstadoPedido,
    tipoEnvio: TipoEnvio,
    formaPago: FormaPago,
    detalles: DetallePedido[],
    //domicilioEntrega: Domicilio,
    //cliente: Persona
}