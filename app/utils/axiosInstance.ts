import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com", // API URL mặc định
  timeout: 10000, // Thời gian timeout là 10 giây
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor để tự động thêm token vào request
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor để xử lý lỗi response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirect to login...");
      // Bạn có thể thực hiện redirect hoặc logout tại đây
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
