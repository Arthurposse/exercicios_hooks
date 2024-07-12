import React from 'react';
import './css/App.css';
import './css/Formulario.css';
import './css/Relogio.css';

import Formulario from './components/Formulario';
import Relogio from './components/Relogio';
import Fatorial from './components/Fatorial';
import ListaTarefas from './components/ListaTarefas';
import Login_user from './components/Login';
import Saldo from './components/Saldo';
import Form_desp from './components/FormEntradaDesp';

import { OrcamentoPessoalProvider } from './components/OrcamentoPessoal'; // Importe o Provider do contexto

function App() {
  return (
    <div>
      <h1> Exercícios Hooks (Arthur Possebon) </h1>

      <h2> Exercício 1 - Formulário com botão de limpar </h2>
      <Formulario />

      <h2> Exercício 2 - Relógio com mensagem </h2>
      <Relogio />

      <h2> Exercício 3 - Fatorial </h2>
      <Fatorial />

      <h2> Exercício 4 - Lista de tarefas </h2>
      <ListaTarefas />

      <h2> Exercício 5 - Login </h2>
      <Login_user />

      <h2> Exercício 6 - Gerenciamento de orçamento pessoal </h2>

      {/* Wrap Saldo and Form_desp with OrcamentoPessoalProvider */}
      <OrcamentoPessoalProvider>
        <div>
          <h3> Saldo </h3>
          <Saldo />

          <h3> Formulário de entrada de despesas </h3>
          <Form_desp />

          <h3> Exibição das despesas </h3>
          {/* Coloque aqui o componente para exibir as despesas */}
        </div>
      </OrcamentoPessoalProvider>
    </div>
  );
}

export default App;
