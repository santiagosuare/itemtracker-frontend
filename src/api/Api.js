import axios from "axios";

const baseURL = "http://localhost:8080/";

export const axiosInstance = axios.create({
  baseURL,
});

class API {
  static async getAllItems() {
    const { data } = await axiosInstance.get("v1/GetItems");
    return data;
  }
}

export default API;
