import React, { useState, createContext, useReducer } from 'react';

import { MessageType } from '../types/types';

interface DataContextType {
  textInput: MessageType;
  setTextInput: (value: MessageType) => void;
  depth: number;
  setDepth: (value: number) => void;
}



export const DataContext = createContext<DataContextType | undefined>(undefined);

interface Props {
    children: React.ReactNode;
}

export const DataProvider = ({ children }: Props) => {



  const [textInput, setTextInput] = useState<MessageType>({} as MessageType);
  const [depth, setDepth] = useState(0)
  return (
    <DataContext.Provider value={{ textInput, setTextInput, depth, setDepth }}> 
        {children}
    </DataContext.Provider>
  )
}