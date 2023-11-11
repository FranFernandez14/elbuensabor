import Producto from "./Producto";

export default interface DetallePedido {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    cantidad: number,
    subtotal: number,
    subtotalCosto: number,
    producto: Producto,
    //pedido: Pedido
}