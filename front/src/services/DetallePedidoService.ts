import DetallePedido from "../types/DetallePedido";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const DetallePedidoService = {
    getRubrosDetallePedidos: async () : Promise<DetallePedido[]> => {
        const response = await fetch(`${API_URL}/pedidos/detallePedido`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    getDetallePedido: async(id: number) : Promise<DetallePedido> => {
        const response = await fetch(`${API_URL}/pedidos/detallePedido/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    createDetallePedido: async(detallePedido: DetallePedido) : Promise<DetallePedido> => {
        const response = await fetch(`${API_URL}/pedidos/detallePedido`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(detallePedido)
        });
        const data = await response.json();
        return data;
    },

    updateDetallePedido: async(id: number, detallePedido: DetallePedido) : Promise<DetallePedido> => {
        const response = await fetch(`${API_URL}/pedidos/detallePedido/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(detallePedido)
        });
        const data = await response.json();
        return data;
    },

    deleteDetallePedido: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/pedidos/detallePedido/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
    }    
};