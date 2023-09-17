import React, { useState, createContext, useReducer } from 'react';

import { MessageType } from '../types/types';

interface DataContextType {
  textInput: MessageType;
  setTextInput: (value: MessageType) => void;
  initMessage: string;
  setInitMessage: (value: string) => void;
}



export const DataContext = createContext<DataContextType | undefined>(undefined);

interface Props {
    children: React.ReactNode;
}

export const DataProvider = ({ children }: Props) => {



  const [textInput, setTextInput] = useState<MessageType>({} as MessageType);
  const [initMessage, setInitMessage] = useState("")
  return (
    <DataContext.Provider value={{ textInput, setTextInput, initMessage, setInitMessage }}> 
        {children}
    </DataContext.Provider>
  )
}