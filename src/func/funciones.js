import axios from "axios";

const mostrarEstados = async (state) => {
    const peticion = await axios.get(
        "https://api.datos.gob.mx/v1/condiciones-atmosfericas"
    );

    state(peticion.data.results);
};


const showById = async (id, state) => {

    const peticion = await axios.get(`https://api.datos.gob.mx/v1/condiciones-atmosfericas/?_id=${id}`)
    state(peticion.data.results)


}

export {
    mostrarEstados,
    showById
}