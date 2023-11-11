import DetalleReceta from "./DetalleReceta";

export default interface Receta {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    descripcion: string,
    detalles: DetalleReceta[]
}