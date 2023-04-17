import axios from 'axios';
import { API_BASE_URL } from '../utils/constants/string.constants';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default class AxiosApiHelper {
    static async get(url, params = {}) {
        try {
            const response = await axiosInstance.get(url, { params });
            return response.data;
        } catch (error) {
            console.error(`GET ${url} error:`, error);
            throw error;
        }
    };

    static async post(url, data = {}) {
        try {
            const response = await axiosInstance.post(url, data);
            return response.data;
        } catch (error) {
            console.error(`POST ${url} error:`, error);
            throw error;
        }
    };

    static async patch(url, data = {}) {
        try {
            const response = await axiosInstance.patch(url, data);
            return response.data;
        } catch (error) {
            console.error(`PATCH ${url} error:`, error);
            throw error;
        }
    };

    static async delete(url, data = {}) {
        try {
            const response = await axiosInstance.delete(url, { data });
            return response.data;
        } catch (error) {
            console.error(`DELETE ${url} error:`, error);
            throw error;
        }
    };
}

