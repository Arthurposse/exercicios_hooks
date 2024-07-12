import React, { useRef } from 'react';

function Formulario() {
  const inputRef = useRef(null);

  const handleClear = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div>
      <form>
        <label>
            Insira seu nome:
        </label>
          <input type="text" ref={inputRef} />
        <button type="button" onClick={handleClear}>Limpar</button>
      </form>
    </div>
  );
}

export default Formulario;