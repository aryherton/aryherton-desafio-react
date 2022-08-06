import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navgate = useNavigate();
  return (
    <div>
      <h1>Pagina não encontrada</h1>
      <button
        type="button"
        onClick={() => navgate('/') }
      >
        Voltar
      </button>
    </div>
  );
}

export default NotFound;