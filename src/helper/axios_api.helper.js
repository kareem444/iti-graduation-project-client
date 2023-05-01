import axios from 'axios';
import { API_BASE_URL } from '../utils/constants/string.constants';
import cookies from 'js-cookie'

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + cookies.get('access_token')
    },
});

const axiosInstanceProduct = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type':'multipart/form-data;',
        'Authorization': 'Bearer ' + cookies.get('access_token')
    },
});

export default class AxiosApiHelper {
    static async get(url, params = {}, headers = {}) {
        try {
            const response = await axiosInstance.get(url, { params }, { headers });
            return response.data;
        } catch (error) {
            console.error(`GET ${url} error:`, error);
            throw error;
        }
    };

    static async post(url, data = {}, headers = {}) {
        try {
            const response = await axiosInstance.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`POST ${url} error:`, error);
            throw error;
        }
    };

    static async patch(url, data = {}, headers = {}) {
        try {
            const response = await axiosInstance.patch(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`PATCH ${url} error:`, error);
            throw error;
        }
    };

    static async delete(url, data = {}, headers = {}) {
        try {
            const response = await axiosInstance.delete(url, { data }, { headers });
            return response.data;
        } catch (error) {
            console.error(`DELETE ${url} error:`, error);
            throw error;
        }
    };

    static async postNewProduct(url, data = {}) {
        try {
            const response = await axiosInstanceProduct.post(url, data);
            return response.data;
        } catch (error) {
            console.error(`POST ${url} error:`, error);
            throw error;
        }
    };
}

