import Domicilio from "./Domicilio";
import { Rol } from "./Rol";

export default interface RegisterRequest {
    email: string,
    password: string,
    telefono: string,
    nombre: string,
    apellido: string,
    domicilio: Domicilio,
    rol: Rol
}