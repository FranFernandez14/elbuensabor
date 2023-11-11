import rubroInsumo from "./RubroInsumo"
import UnidadMedida from "./UnidadMedida"

export default interface Insumo {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    denominacion: string,
    urlImagen: String,
    precioCompra: number,
    stockActual: number,
    stockMinimo: number,
    unidadMedida: UnidadMedida,
    rubroInsumo: rubroInsumo
}