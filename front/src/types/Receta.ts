import DetalleReceta from "./DetalleReceta";

export default interface Receta {
    id: number | null,
    fechaAlta: Date,
    fechaModificacion: Date | null,
    fechaBaja: Date | null,
    descripcion: string,
    detalles: DetalleReceta[]
}