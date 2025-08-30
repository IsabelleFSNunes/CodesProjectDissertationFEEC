import { createContext } from "react";

export type DataGHI = {
    lon : number; 
    lat : number;
    name : string;
    class_field : string;
    state : string;
    annual : number;
    jan : number;
    feb : number;
    mar : number;
    apr : number;
    may : number;
    jun : number;
    jul : number;
    aug : number;
    sep : number; 
    oct : number;
    nov : number;
    dec : number;
    id_table : number ;
    id : number | string;
  };
  
  export  type DataTable = Omit<DataGHI, 'id' | 'id_table' | 'class_field' | 'name' | 'state' | 'lon' | 'lat' | 'annual'>;
  
  export type Props = {
    data: DataTable[];
  };
  
  export type DataTotal = {
    model : string;
    pk : number;
    fields : DataGHI;
  }

export const GHIContext = createContext<DataGHI[]>([]);
