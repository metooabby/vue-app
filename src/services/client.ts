import axios from "axios";
import { useAuthStore } from "../stores/auth";

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    const auth = useAuthStore()
    if(auth.isAuthenticated){
         config.headers.Authorization = "Bearer fake-token";
    }
    return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);

    // future: handle 401, refresh token, logout, etc.
    return Promise.reject(error);
  }
);

export default apiClient;