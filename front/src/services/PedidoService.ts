import { EstadoPedido } from "../types/EstadoPedido";
import { FormaPago } from "../types/FormaPago";
import Pedido from "../types/Pedido";
import { TipoEnvio } from "../types/TipoEnvio";
import { PersonaService } from "./PersonaService";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const PedidoService = {
    getPedidos: async () : Promise<Pedido[]> => {
        const response = await fetch(`${API_URL}/pedidos/pedido`);
        const data = await response.json();
        return data;
    },

    getPedido: async(id: number) : Promise<Pedido> => {
        const response = await fetch(`${API_URL}/pedidos/pedido/${id}`);
        const data = await response.json();
        return data;
    },

    createPedido: async(pedido: Pedido) : Promise<Pedido> => {
        const response = await fetch(`${API_URL}/pedidos/pedido`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pedido)
        });
        const data = await response.json();
        return data;
    },

    deletePedido: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/pedidos/pedido/${id}`, {
            method: "DELETE"
        });
    },





    getPedidoActual: async() : Promise<Pedido> => {
        // Modificar para obtener al cliente desde LocalStorage,
        let cliente = await PersonaService.getPersona(1);
        let pedido: Pedido | null = null;
        cliente.pedidos.forEach(p => {
            let epa = "" + p.estadoActual;
            let pp = EstadoPedido[EstadoPedido.PENDIENTE_PAGO];
            if (epa === pp) {
                pedido = p;
            }
        });
        
        if (pedido === null) {
            pedido = {
                id: null,
                fechaAlta: new Date(),
                fechaModificacion: null,
                fechaBaja: null,
                fechaPedido: null,
                horaEstimadaFinalizacion: null,
                total: 0,
                totalCosto: 0,
                estadoActual: EstadoPedido.PENDIENTE_PAGO,
                tipoEnvio: TipoEnvio.TAKE_AWAY,
                formaPago: FormaPago.EFECTIVO,
                detalles: [],
                domicilioEntrega: cliente.domicilios[0],
            };
            cliente.pedidos.push(pedido);
            cliente = await PersonaService.updatePersona(cliente.id, cliente);
            /*
                IMPORTANTE: NO LOGRO QUE ASIGNE EL CLIENTE AL PEDIDO.
                Con Postman tampoco funciona
            */
            cliente.pedidos.forEach(p => {
                let epa = "" + p.estadoActual;
                let pp = EstadoPedido[EstadoPedido.PENDIENTE_PAGO];
                if (epa === pp) {
                    pedido = p;
                }
            });
        }
        //QUITAR ESTA LÍNEA CUANDO FUNCIONE EL RESTO
        pedido = await PedidoService.getPedido(1);
        return pedido;
    }
    
};