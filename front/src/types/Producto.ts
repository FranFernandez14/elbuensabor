import Receta from "./Receta";
import RubroProducto from "./RubroProducto";

export default interface Producto {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    denominacion: string,
    descripcion: string,
    tiempoEstimadoCocina: number,
    precioVenta: number,
    costo: number,
    urlImagen: string,
    rubroProducto: RubroProducto,
    receta: Receta
}