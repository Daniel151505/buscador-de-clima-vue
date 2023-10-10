export default function useClima() {
    
    const obtenerClima = ({ciudad, pais}) => {
        // Importar el Api key
        const key = import.meta.env.VITE_API_KEY

        // Obtener la latitud y la longitud
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`

        // Obtener el clima
    }

    return {
        obtenerClima
    }
}