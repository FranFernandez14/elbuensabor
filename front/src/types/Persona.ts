import Domicilio from "./Domicilio";
import NotasCredito from "./NotasCredito";
import Pedido from "./Pedido";
import { Rol } from "./Rol";


export default interface Persona {
    id: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
    email:String,
    password:String,
    rol: Rol,
    nombre:String,
    apellido:String,
    telefono:String,
    domicilios:Domicilio[],
    pedidos:Pedido[],
    notasCredito:NotasCredito[]
    
}