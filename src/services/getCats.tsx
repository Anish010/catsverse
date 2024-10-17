import { AxiosResponse } from "axios";
import apiClient from "../utils/axiosInstance";

const getCats = async (): Promise<AxiosResponse<any> | undefined> => {
  try {
    const response: AxiosResponse<any> = await apiClient.get(`/images/0XYvRd7oD`);
    return response;
  } catch (error) {
    console.error("Error fetching cats from API:", error);
    return undefined;
  }
};

export default getCats;
