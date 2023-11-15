import Insumo from "../types/Insumo";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const InsumoService = {
    getInsumos: async () : Promise<Insumo[]> => {
        const response = await fetch(`${API_URL}/productos/insumo`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    getInsumo: async(id: number) : Promise<Insumo> => {
        const response = await fetch(`${API_URL}/productos/insumo/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    createInsumo: async(Insumos: Insumo) : Promise<Insumo> => {
        const response = await fetch(`${API_URL}/productos/insumo`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(Insumos)
        });
        const data = await response.json();
        return data;
    },

    updateInsumo: async(id: number, Insumos: Insumo) : Promise<Insumo> => {
        const response = await fetch(`${API_URL}/productos/insumo/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(Insumos)
        });
        const data = await response.json();
        return data;
    },

    deleteInsumo: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/productos/insumo/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
    }    
};