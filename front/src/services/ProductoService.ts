import Producto from "../types/Producto";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

export const ProductoService = {
    getProductos: async () : Promise<Producto[]> => {
        const response = await fetch(`${API_URL}/productos/producto`,
        {
            headers: {
            }
        });
        const data = await response.json();
        return data;
    },

    getProducto: async(id: number) : Promise<Producto> => {
        const response = await fetch(`${API_URL}/productos/producto/${id}`, {
            headers: {
            }
        });
        const data = await response.json();
        return data;
    },

    createProducto: async(producto: Producto) : Promise<Producto> => {
        const response = await fetch(`${API_URL}/productos/producto`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producto)
        });
        const data = await response.json();
        return data;
    },

    updateProducto: async(id: number, producto: Producto) : Promise<Producto> => {
        const response = await fetch(`${API_URL}/productos/producto/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producto)
        });
        const data = await response.json();
        return data;
    },

    deleteProducto: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/productos/producto/${id}`, {
            method: "DELETE",
            headers: {
            }
        });
    },

    getProductosPorRubro: async (rubro: string, page: {
        number: number,
        size: number
    }) : Promise<Producto[]> => {
        const response = await fetch(`
            ${API_URL}/productos/producto/porRubro?denominacion=${rubro}&page=${page.number}&size=${page.size}`, {
                headers: {
                }
            });
        const data = await response.json();
        return data.content;
    },

    buscar: async (fechaInicio: Date, fechaHasta: Date, rubros: string[], page: {
        number: number,
        size: number
    }) : Promise<Producto[]> => {
        const response = await fetch(`
            ${API_URL}/productos/producto/ranking?fechaInicio=${fechaInicio.toISOString().split('T')[0]}&fechaHasta=${fechaHasta.toISOString().split('T')[0]}&${rubros.map(rubro => `denominaciones=${rubro}&`)}page=${page.number}&size=${page.size}`, {
                headers: {
                }
            });
        const data = await response.json();
        return data.content;
    },
    
};