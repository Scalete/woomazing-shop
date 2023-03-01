import React from "react";

interface IDataFormContext {
    activeForm: boolean;
    setActiveForm?: React.Dispatch<React.SetStateAction<boolean>>;
}

  
export const DataFormContext = React.createContext<IDataFormContext>({activeForm: false});