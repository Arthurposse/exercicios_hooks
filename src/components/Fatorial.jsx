import React, { useState, useMemo } from 'react';

function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}

function App() {
  const [number, setNumber] = useState(1);
  
  const resultadoFatorial = useMemo(() => fatorial(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        min="0"
      />
      <p>Fatorial de {number}: {resultadoFatorial}</p>
    </div>
  );
}

export default App;