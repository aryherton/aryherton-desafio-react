import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DataContext from '../context/DataContext';
import { getAllRepos, getDataUser } from '../services/requestApi';
import ERROR_MESSAGE from '../help/MessageErro';
import StyledSearchWrapper from '../style/pagesStyle/styledPageSearch';
import Lupa from '../img/lupa.png';

function Search() {
  const navigate = useNavigate();
  const { setDataRepo, setDataUser } = useContext(DataContext);
  const [valueInput, setSearch] = useState('');
  const [errorValueInput, setErrorValueInput] = useState('');

  const getValueInput = ({ target: { value } }) => {
    setSearch(value);
    setErrorValueInput('');
  }

  const getData = async () => {
    if (valueInput) {
      const dataUser = await getDataUser(valueInput);

      if (dataUser === 404) {
        setErrorValueInput('NotFound');
      } else {
        const response = await getAllRepos(`${valueInput}/repos`);
        setDataRepo(response);
        setDataUser(dataUser);
        navigate('/home');
      }
      return;
    }
    errorValueInput === 'NotFound'
      ? setErrorValueInput('NotFound')
      : setErrorValueInput('empty');
  };

  return (
    <StyledSearchWrapper>
      <main>
        <section>
          <label htmlFor="searchRepos">
            Buscar Repositório no github
          </label>
          <input
            id="searchRepos"
            type="text"
            placeholder="digite o nomedo usuário"
            onChange={ getValueInput }
          />
        </section>
        <button name="buscar" onClick={ getData }>
          <img src={ Lupa } alt="lupa" />
          Buscar
        </button>
        { errorValueInput === 'empty'
          &&
            <p className="errorMessage">
              { ERROR_MESSAGE.input_empty }
            </p>}
        { errorValueInput === 'NotFound'
          &&
          <p className="errorMessage">
            { ERROR_MESSAGE.not_found }
          </p>
        }
      </main>
    </StyledSearchWrapper>
  );
}

export default Search;