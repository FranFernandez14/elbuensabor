import DetallePedido from "./DetallePedido";
import Domicilio from "./Domicilio";
import { EstadoPedido } from "./EstadoPedido";
import { FormaPago } from "./FormaPago";
import { TipoEnvio } from "./TipoEnvio";

export default interface Pedido {
    id: number | null,
    fechaAlta: Date,
    fechaModificacion: Date | null,
    fechaBaja: Date | null,
    fechaPedido: Date | null,
    horaEstimadaFinalizacion: Date | null,
    total: number,
    totalCosto: number,
    estadoActual: EstadoPedido,
    tipoEnvio: TipoEnvio,
    formaPago: FormaPago,
    detalles: DetallePedido[],
    domicilioEntrega: Domicilio
}