export default interface RubroProducto {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    rubroPadre: RubroProducto,
    subRubro : RubroProducto[],
    denominacion: string
}