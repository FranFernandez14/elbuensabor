import Pedido from "../types/Pedido";
import Persona from "../types/Persona";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const PersonaService = {
    getPersonas: async () : Promise<  Persona[]> => {
        const response = await fetch(`${API_URL}/usuarios/persona`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    getPersona: async(id: number) : Promise<Persona> => {
        const response = await fetch(`${API_URL}/usuarios/persona/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },

    createPersona: async(persona: Persona) : Promise<Persona> => {
        const response = await fetch(`${API_URL}/usuarios/persona`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(persona)
        });
        const data = await response.json();
        return data;
    },

    updatePersona: async(id: number, persona: Persona) : Promise<Persona> => {
        delete persona.authorities;
        const response = await fetch(`${API_URL}/usuarios/persona/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(persona)
        });
        const data = await response.json();
        return data;
    },

    deletePersona: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/usuarios/persona/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
    },

    getPersonaPorEmail: async(email: string) : Promise<Persona> => {
        const response = await fetch(`${API_URL}/usuarios/persona/getByEmail?email=${email}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const data = await response.json();
        return data;
    },


    crearPedido: async(idPersona: number, idDomicilio: number) : Promise<Pedido> => {
        const response = await fetch(`${API_URL}/usuarios/persona/crearPedido`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify({
                idPersona: idPersona,
                idDomicilio: idDomicilio
            })
        });
        const data = await response.json();
        return data;
    }

};