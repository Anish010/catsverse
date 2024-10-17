import { AxiosResponse } from "axios";
import { Breed } from "../models/breed";
import apiClient from "../utils/axiosInstance";

const searchBreeds = async (search_term : string): Promise<AxiosResponse<Breed[]> | undefined | any> => {

    try {
      const response: AxiosResponse<Breed[]> = await apiClient.get(`breeds/search?q=${search_term}`);
      return response;
    } catch (error) {
      return error; 
    }
  };

export default searchBreeds;
