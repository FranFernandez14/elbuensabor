import { EstadoPedido } from "../types/EstadoPedido";
import { FormaPago } from "../types/FormaPago";
import Pedido from "../types/Pedido";
import { TipoEnvio } from "../types/TipoEnvio";
import { AuthService } from "./AuthService";
import { PersonaService } from "./PersonaService";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const PedidoService = {
    getPedidos: async () : Promise<Pedido[]> => {
        const response = await fetch(`${API_URL}/pedidos/pedido`, {
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    getPedido: async(id: number) : Promise<Pedido> => {
        const response = await fetch(`${API_URL}/pedidos/pedido/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    createPedido: async(pedido: Pedido) : Promise<Pedido> => {
        const response = await fetch(`${API_URL}/pedidos/pedido`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(pedido)
        });
        const data = await response.json();
        return data;
    },

    updatePedido: async(id: number, pedido: Pedido) : Promise<Pedido> => {
        const response = await fetch(`${API_URL}/pedidos/pedido/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(pedido)
        });
        const data = await response.json();
        return data;
    },

    deletePedido: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/pedidos/pedido/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
    },


    agregarDetalle: async(idPedido: number, idProducto: number, cantidad: number) : Promise<Pedido> => {
        const response = await fetch(`${API_URL}/pedidos/pedido/agregarDetalle`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify({
                idPedido: idPedido,
                idProducto: idProducto,
                cantidad: cantidad
            })
        });
        const data = await response.json();
        return data;
    },





    getPedidoActual: async() : Promise<Pedido | undefined> => {
        let cliente = await AuthService.getCurrentUser();
        if(cliente === null) return undefined;
        let pedido: Pedido | null = null;
        cliente.pedidos.forEach(p => {
            let epa: string = "" + p.estadoActual;
            let pp: string = EstadoPedido.SIN_PEDIR;
            if (epa === pp) {
                pedido = p;
            }
        });
        
        if (pedido === null) {
            //if (cliente.domicilios[0].id === null) throw "Error que nunca va a pasar";
            pedido = await PersonaService.crearPedido(cliente.id, 1);
        }
        return pedido;
    }
    
};