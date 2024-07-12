import React, { createContext, useState } from 'react';

export const OrcamentoPessoalContext = createContext();

export const OrcamentoPessoalProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <OrcamentoPessoalContext.Provider value={{ expenses, addExpense }}>
      {children}
    </OrcamentoPessoalContext.Provider>
  );
};