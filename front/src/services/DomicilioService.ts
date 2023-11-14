import Domicilio from "../types/Domicilio";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const DomicilioService = {
    getDomicilios: async () : Promise<Domicilio[]> => {
        const response = await fetch(`${API_URL}/usuarios/domicilios`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    getDomicilio: async(id: number) : Promise<Domicilio> => {
        const response = await fetch(`${API_URL}/usuarios/domicilios/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    createDomicilio: async(domicilios: Domicilio) : Promise<Domicilio> => {
        const response = await fetch(`${API_URL}/usuarios/domicilios`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(domicilios)
        });
        const data = await response.json();
        return data;
    },

    updateDomicilio: async(id: number, domicilios: Domicilio) : Promise<Domicilio> => {
        const response = await fetch(`${API_URL}/usuarios/domicilios/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(domicilios)
        });
        const data = await response.json();
        return data;
    },

    deleteDomicilio: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/usuarios/domicilios/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
    }    
};