export default interface rubroInsumo {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    rubroPadre: rubroInsumo,
    subRubro : rubroInsumo[],
    denominacion: string
}