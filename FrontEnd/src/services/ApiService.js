import axios from "axios";

const API_URL = "http://localhost:8080/api/items";

const ApiService = {
    getAllItems: () => axios.get(API_URL),
    addItem: (item) => axios.post(API_URL, item),
    deleteItem: (id) => axios.delete(`${API_URL}/${id}`),
    updateItem: (id, item) => axios.put(`${API_URL}/${id}`, item),
    searchItems: (query) => axios.get(`${API_URL}/search?name=${query}`),
};

export default ApiService;
