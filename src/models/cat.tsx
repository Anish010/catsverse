import { Breed } from "./breed";

export interface Cat {
    id: string;
    url: string;
    breeds: Breed[];
    width: number;
    height: number;
  }