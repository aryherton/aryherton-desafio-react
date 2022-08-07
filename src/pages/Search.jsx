import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DataContext from '../context/DataContext';
import { getAllRepos, getDataUser } from '../services/requestApi';
import StyledSearchWrapper from '../style/pagesStyle/styledPageSearch';
import Lupa from '../img/lupa.png';

function Search() {
    const navigate = useNavigate();
    const { setDataRepo, setDataUser } = useContext(DataContext);
    const [search, setSearch] = useState('');

    const getValueInput = ({ target: { value } }) => {
        setSearch(value);
    }

    const getData = async () => {
        if (search) {
            const response = await getAllRepos(`${search}/repos`);
            const dataUser = await getDataUser(search);
            setDataRepo(response);
            setDataUser(dataUser);
            navigate('/home');
        }
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
        <button onClick={getData}>
          <img src={Lupa} alt="lupa" />
          <span>Buscar</span>
        </button>
      </main>
    </StyledSearchWrapper>
  );
}

export default Search;