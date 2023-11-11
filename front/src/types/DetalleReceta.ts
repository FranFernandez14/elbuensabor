import Insumo from "./Insumo";
import Receta from "./Receta";

export default interface DetalleReceta {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    cantidad: number,
    costo: number,
    receta: Receta,
    insumo: Insumo
}