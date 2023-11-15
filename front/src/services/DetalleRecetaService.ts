import DetalleReceta from "../types/DetalleReceta";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const DetalleRecetaService = {
    
    getDetalleReceta: async(id: number) : Promise<DetalleReceta> => {
        const response = await fetch(`${API_URL}/productos/detalleReceta/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    createDetalleReceta: async(detalleReceta: DetalleReceta) : Promise<DetalleReceta> => {
        const response = await fetch(`${API_URL}/productos/detalleReceta`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(detalleReceta)
        });
        const data = await response.json();
        return data;
    },

    updateDetalleReceta: async(id: number, detalleReceta: DetalleReceta) : Promise<DetalleReceta> => {
        const response = await fetch(`${API_URL}/productos/detalleReceta/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(detalleReceta)
        });
        const data = await response.json();
        return data;
    },

    deleteDetalleReceta: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/productos/detalleReceta/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
    }    
};