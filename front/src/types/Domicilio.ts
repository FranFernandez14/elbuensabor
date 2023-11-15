    import Persona from "./Persona";


export default interface Domicilio{
    id: number | null,
    fechaAlta: Date,
    fechaModificacion: Date | null,
    fechaBaja: Date | null,
    calle: string,
    numero: number | undefined,
    codigoPostal: number | undefined,
    localidad: string,
    numeroDpto: number | undefined,
    pisoDpto: number | undefined,
    persona: Persona | null
}