import Receta from "./Receta";
import RubroProducto from "./RubroProducto";

export default interface Producto {
    id: number | null,
    fechaAlta: Date,
    fechaModificacion: Date | null,
    fechaBaja: Date | null,
    denominacion: string,
    descripcion: string,
    tiempoEstimadoCocina: number,
    precioVenta: number,
    costo: number,
    urlImagen: string,
    rubroProducto: RubroProducto | null,
    receta: Receta
}