import axios from "axios";

const BASE_URL = "http://localhost:8080/api/items";

const ApiService = {
    getAllItems: () => axios.get(BASE_URL),
    addItem: (item) => axios.post(BASE_URL, item),
    updateItem: (id, item) => axios.put(`${BASE_URL}/${id}`, item),
    deleteItem: (id) => axios.delete(`${BASE_URL}/${id}`),
    searchItems: (name) => axios.get(`${BASE_URL}/search?name=${name}`),
};

export default ApiService;
