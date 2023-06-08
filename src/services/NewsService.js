import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import AxiosInstance from "../utils/helpers/AxiosInstance";


// Lấy danh sách bản tin
export const getNews = async () => {
    try {
        const response = await AxiosInstance().get('/articles');
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const getMyNews = async () => {
    try {
        const response = await AxiosInstance().get('/articles/my-articles');
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const createNews = async (title , content, image = null) => {
    try {
        const response = await AxiosInstance().post('/articles', { title, content, image });
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const getNewsById = async (id) => {
    try {
        const response = await AxiosInstance().get(`/articles/${id}/detail`);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const uploadImage = async (form) => {
    try {
        const response = await AxiosInstance( 'multipart/form-data').post('/media/upload', form);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}