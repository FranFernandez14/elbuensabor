import Pedido from "../types/Pedido";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const RubroProductoService = {
    getPedidos: async () : Promise<Pedido[]> => {
        const response = await fetch(`${API_URL}/productos/pedido`);
        const data = await response.json();
        return data;
    },

    getPedido: async(id: number) : Promise<Pedido> => {
        const response = await fetch(`${API_URL}/productos/pedido/${id}`);
        const data = await response.json();
        return data;
    },

    createPedido: async(pedido: Pedido) : Promise<Pedido> => {
        const response = await fetch(`${API_URL}/productos/pedido`, {
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
        const response = await fetch(`${API_URL}/productos/pedido/${id}`, {
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
        await fetch(`${API_URL}/productos/pedido/${id}`, {
            method: "DELETE"
        });
    },

    
};