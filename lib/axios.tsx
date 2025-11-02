import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";


const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    }
}); export default api;


api.interceptors.request.use((config) => {
    const access_token = Cookies.get("access_token")
    if (access_token) {
        config.headers.Authorization = "Bearer " + access_token;
    }
    return config;
});

const getNewRefreshToken = async () => {
    const response = await api.post("/auth/token/refresh/", { refresh: Cookies.get("refresh_token") });
    if (response.data?.access) {
        Cookies.set("access_token", response.data.access);
        api.defaults.headers.common.Authorization = response.data.access;
    }
};

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response && error.response.status === 401) {
            if (Cookies.get("refresh_token")) {
                getNewRefreshToken();
            } else {
                Cookies.remove("access_token");
            }
        }
        return Promise.reject(error);
    },
)

export const setToken = (access_token: string, refresh_token?: string) => {
    Cookies.set("access_token", access_token);
    // put the access token in api instance 
    api.defaults.headers.common.Authorization = "Bearer " + access_token;
    if (refresh_token) {
        Cookies.set("refresh_token", refresh_token);
    };
}