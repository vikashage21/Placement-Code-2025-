import {  createContext } from "react";


export const BioContext = createContext()


export const BioProvider = ({ children }) => {
  const data = "hello vikash"
  return  <BioContext.Provider value={data}>{children}</BioContext.Provider>
  
}