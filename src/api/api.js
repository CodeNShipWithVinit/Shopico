import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL;

export const getProducts=async()=>{
    const response=await axios.get(`${API_URL}/products`);
    console.log(response.data.products);
    return response.data.products;
}