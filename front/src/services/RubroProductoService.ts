import RubroProducto from "../types/RubroProducto";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const RubroProductoService = {
    getRubrosProducto: async () : Promise<RubroProducto[]> => {
        const response = await fetch(`${API_URL}/productos/rubroProducto`, {
            headers: {
            }
        });
        const data = await response.json();
        return data;
    },

    getRubroProducto: async(id: number) : Promise<RubroProducto> => {
        const response = await fetch(`${API_URL}/productos/rubroProducto/${id}`, {
            headers: {
            }
        });
        const data = await response.json();
        return data;
    },

    createRubroProducto: async(rubroProducto: RubroProducto) : Promise<RubroProducto> => {
        const response = await fetch(`${API_URL}/productos/rubroProducto`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rubroProducto)
        });
        const data = await response.json();
        return data;
    },

    updateRubroProducto: async(id: number, rubroProducto: RubroProducto) : Promise<RubroProducto> => {
        const response = await fetch(`${API_URL}/productos/rubroProducto/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rubroProducto)
        });
        const data = await response.json();
        return data;
    },

    deleteRubroProducto: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/productos/rubroProducto/${id}`, {
            method: "DELETE",
            headers: {
            }
        });
    }    
};