import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

import App from '../App';
import ERROR_MESSAGE from '../help/MessageErro';

const USER_NAME_INVALID = 'asdf2345asdf23453fer54t';
const USER_NAME_VALID = 'aryherton';


describe('Test page Search', () => {
  test('O texto "Buscar Repositório no github",'
    + 'deve aparecer na tela', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const txtElement = screen
      .getByRole('textbox', { name: 'Buscar Repositório no github' });
    
    expect(txtElement).toBeInTheDocument();
  });
  test('Verificar se o botão "Buscar" está presente na tela', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const btnElement = screen.getByText('Buscar');

    expect(btnElement).toBeInstanceOf(HTMLButtonElement);
  });
  test('Ao clicar no botão "Buscar", sem digitar nada, no campo de busca.'
  + ' Deve aparecer a seguinte mensagem de erro:'
  +'"Informe um nome de usuário válido do github."', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const btnElement = screen.getByText('Buscar');
    
    expect(btnElement).toBeInstanceOf(HTMLButtonElement);
    
    userEvent.click(btnElement);
    
    setTimeout(() => {
      const errorElement = screen.getByText(ERROR_MESSAGE.input_empty);
      
      expect(errorElement).toBeInTheDocument();
    }, 1000);
  });
  test('Ao clicar no botão "Buscar", com nome de usuário que não existe. '
  +'Deve aparecer a seguinte mensagem de erro: '
  +'"Usuário não encontrado no github.Verifique se você digitou o nome corretamente."', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const btnElement = screen.getByText('Buscar');
    const inputElement = screen.getByRole('textbox', { name: 'Buscar Repositório no github' });
    
    expect(inputElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
    
    userEvent.type(inputElement, USER_NAME_INVALID);

    setTimeout(() => {
      expect(inputElement.value).toBe(USER_NAME_INVALID);
        
      userEvent.click(btnElement);
      
      const errorElement = screen.getByText(ERROR_MESSAGE.user_not_found);
      
      expect(errorElement).toBeInTheDocument();
      }, 1000);
  });
  test('Ao clicar no botão "Buscar", com nome de usuário valido. '
  +'Deve redirecionar para rota "/home"', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const btnElement = screen.getByText('Buscar');
    const inputElement = screen.getByRole('textbox', { name: 'Buscar Repositório no github' });
    
    expect(inputElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
    
    userEvent.type(inputElement, USER_NAME_VALID);
    
    setTimeout(() => {
      expect(inputElement.value).toBe(USER_NAME_VALID);
      
      userEvent.click(btnElement);
      
      const errorElement = screen.getByText(USER_NAME_VALID);
      
      expect(errorElement).toBeInTheDocument();
    }, 1000);
  });
});