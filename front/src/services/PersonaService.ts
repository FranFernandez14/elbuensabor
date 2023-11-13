import Persona from "../types/Persona";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const PersonaService = {
    getPersonas: async () : Promise<  Persona[]> => {
        const response = await fetch(`${API_URL}/usuarios/persona`);
        const data = await response.json();
        return data;
    },

    getPersona: async(id: number) : Promise<Persona> => {
        const response = await fetch(`${API_URL}/usuarios/persona/${id}`);
        const data = await response.json();
        return data;
    },

    createPersona: async(persona: Persona) : Promise<Persona> => {
        const response = await fetch(`${API_URL}/usuarios/persona`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(persona)
        });
        const data = await response.json();
        return data;
    },

    updatePersona: async(id: number, persona: Persona) : Promise<Persona> => {
        const response = await fetch(`${API_URL}/usuarios/persona/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(persona)
        });
        const data = await response.json();
        return data;
    },

    deletePersona: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/usuarios/persona/${id}`, {
            method: "DELETE"
        });
    }

};