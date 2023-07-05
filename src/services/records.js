import axios from 'axios';

export const getRecordsMGC = async (page = 1, size=100) => {
    const response = await axios.get(`https://api.datos.gob.mx/v2/Records?pageSize=${size}&page=${page}`);
    return response.data;
}