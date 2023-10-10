import axios from "axios";

export default function useClima() {
  const obtenerClima = async ({ ciudad, pais }) => {
    // Importar el Api key
    const key = import.meta.env.VITE_API_KEY;

    try {
      // Obtener la latitud y la longitud
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];

      // Obtener el clima
    } catch (error) {
      console.log(error);
    }
  };

  return {
    obtenerClima,
  };
}
