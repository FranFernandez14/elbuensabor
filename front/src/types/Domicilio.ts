import Persona from "./Persona";


export default interface Domicilio{
    id: number | null,
    fechaAlta: Date,
    fechaModificacion: Date | null,
    fechaBaja: Date | null,
    calle: string,
    numero: number,
    codigoPostal: number,
    localidad: string,
    numeroDpto: number,
    pisoDpto: number,
    persona: Persona | null
}