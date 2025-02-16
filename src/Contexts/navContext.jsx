import { useContext,createContext,useState } from "react";

const navContext = createContext();

export const ContextProvider = ({children})=>{
    const [navValue,setnavValue] = useState('home');
    return <navContext.Provider value={{navValue,setnavValue}} >
        {children}
    </navContext.Provider>
}

export const useNav =()=> useContext(navContext)