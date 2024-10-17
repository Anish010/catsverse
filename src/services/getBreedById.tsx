import { AxiosResponse } from "axios";
import { Breed } from "../models/breed";
import apiClient from "../utils/axiosInstance";

const getBreedById = async (breed_id : string): Promise<AxiosResponse<Breed> | undefined> => {
    try {
      const response: AxiosResponse<Breed> = await apiClient.get(`/breeds/${breed_id}`);
      return response;
    } catch (error) {
      console.error("Error fetching the breed:", error);
      return undefined; 
    }
  };

export default getBreedById;
