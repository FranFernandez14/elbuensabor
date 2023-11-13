import Usuario from "../types/Usuario";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const UsuarioService = {
    getUsurios: async () : Promise<Usuario[]> => {
        const response = await fetch(`${API_URL}/usuarios/usuario`);
        const data = await response.json();
        return data;
    },

    getUsurio: async(id: number) : Promise<Usuario> => {
        const response = await fetch(`${API_URL}/usuarios/usuario/${id}`);
        const data = await response.json();
        return data;
    },

    createUsurio: async(usuario: Usuario) : Promise<Usuario> => {
        const response = await fetch(`${API_URL}/usuarios/usuario`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });
        const data = await response.json();
        return data;
    },

    updateUsurio: async(id: number, usuario: Usuario) : Promise<Usuario> => {
        const response = await fetch(`${API_URL}/usuarios/usuario/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });
        const data = await response.json();
        return data;
    },

    deleteUsurio: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/usuarios/usuario/${id}`, {
            method: "DELETE"
        });
    }    
};