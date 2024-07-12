import React, { useContext, useState } from 'react';
import { OrcamentoPessoalContext } from './OrcamentoPessoal'; // Verifique o caminho correto

const Form_desp = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { addExpense } = useContext(OrcamentoPessoalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== '' && amount.trim() !== '') {
      addExpense({ description, amount: parseFloat(amount) });
      setDescription('');
      setAmount('');
    }
  };

  return (
    <div>
      <h2>Formulário de Despesa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Adicionar Despesa</button>
      </form>
    </div>
  );
};

export default Form_desp;