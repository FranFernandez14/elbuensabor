import Insumo from "./Insumo";
import Receta from "./Receta";

export default interface DetalleReceta {
    id: number | null,
    fechaAlta: Date,
    fechaModificacion: Date | null,
    fechaBaja: Date | null,
    cantidad: number,
    costo: number,
    insumo: Insumo | null
}