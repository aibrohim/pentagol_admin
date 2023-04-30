import { message } from "antd";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://10.10.3.87:8080/",
});

axiosInstance.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    message.error(error.response.data);
  }
);
