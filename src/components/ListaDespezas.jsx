import React, { useContext } from 'react';
import { OrcamentoPessoalContext } from './OrcamentoPessoalContext';

const ListaDespezas = () => {
  const { expenses } = useContext(OrcamentoPessoalContext);

  return (
    <div>
      <h2>Lista de Despesas</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDespezas;