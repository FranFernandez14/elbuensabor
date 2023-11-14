const BASE_URL = "http://localhost:8080";
import LoginRequest from "../types/LoginRequest";
import Persona from "../types/Persona";
import RegisterRequest from "../types/RegisterRequest";
import { PersonaService } from "./PersonaService";

export const AuthService = {
    register: async (registerRequest: RegisterRequest) : Promise<string> => {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(registerRequest)
        });
        const token = (await response.json()).token;
        localStorage.setItem("token", token);
        return token;
    },

    login: async (loginRequest: LoginRequest) : Promise<string> => {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(loginRequest)
        });
        const json = await response.json()
        const token = json.token;
        localStorage.setItem("token", token);
        return token;
    },

    getCurrentUser: async () : Promise<Persona | null> => {
        const token = localStorage.getItem("token");
        if(token === null) return null;
        const payload = JSON.parse(atob(token.split('.')[1]));
        const email = payload.sub;
        return await PersonaService.getPersonaPorEmail(email);
    }

    
}