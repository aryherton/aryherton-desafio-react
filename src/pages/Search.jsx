import React, { useContext, useState } from 'react';

import DataContext from '../context/DataContext';
import { getAllRepos, getDataUser } from '../services/requestApi';

function Search() {
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
        }
    };

  return (
    <div>
      <label htmlFor="searchRepos">
        <input
          type="text"
          placeholder="digite o nomedo usuário"
          onChange={ getValueInput }
        />
      </label>
      <button onClick={ getData }>Buscar</button>
    </div>
  );
}

export default Search;