import React, { useState, useEffect } from 'react';

function Relogio() {
  const [time, setTime] = useState(new Date());
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Atualiza o relógio a cada segundo

    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // A mensagem desaparece após 3 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  const isMorning = time.getHours() < 12;
  const message = isMorning ? 'Bom dia!' : 'Boa noite!';

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      {showMessage && <p>{message}</p>}
    </div>
  );
}

export default Relogio;