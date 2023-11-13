import Producto from "./Producto";

export default interface DetallePedido {
    id: number | null,
    fechaAlta: Date,
    fechaModificacion: Date | null,
    fechaBaja: Date | null,
    cantidad: number,
    subtotal: number,
    subtotalCosto: number,
    producto: Producto
}