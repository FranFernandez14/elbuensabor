import Persona from "./Persona";


export default interface Domicilio{
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    calle: String,
    numero: number,
    codigoPostal: number,
    localidad: String,
    numeroDpto: number,
    pisoDpto: number,
    persona:Persona
}