import Domicilio from "./Domicilio";
import NotasCredito from "./NotasCredito";
import Pedido from "./Pedido";
import { Rol } from "./Rol";


export default interface Persona {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    email:string,
    password:string,
    rol: Rol,
    nombre:string,
    apellido:string,
    telefono:string,
    domicilios:Domicilio[],
    pedidos:Pedido[],
    notasCredito:NotasCredito[],
    authorities:any //Pasan cosas feas si esto no se pone...
    
}