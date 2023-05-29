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
   