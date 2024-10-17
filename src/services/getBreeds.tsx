import { AxiosResponse } from "axios";
import { Breed } from "../models/breed";
import apiClient from "../utils/axiosInstance";

const getBreeds = async (limit : number, page: number = 0): Promise<AxiosResponse<Breed[]> | undefined> => {
    try {
      const response: AxiosResponse<Breed[]> = await apiClient.get(`/breeds?limit=${limit}&page=${page}`);
      return response;
    } catch (error) {
      console.error("Error fetching breeds:", error);
      return undefined; 
    }
  };

export default getBreeds;
