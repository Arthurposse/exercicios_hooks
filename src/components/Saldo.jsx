import React, { useContext } from 'react';
import { OrcamentoPessoalContext } from './OrcamentoPessoal'; // Verifique o caminho correto

const Saldo = () => {
  const { expenses } = useContext(OrcamentoPessoalContext);

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const balance = 1000 - totalExpenses; // Exemplo de saldo inicial de 1000

  return (
    <div>
      <h2>Saldo</h2>
      <p>Saldo Atual: ${balance}</p>
    </div>
  );
};

export default Saldo;