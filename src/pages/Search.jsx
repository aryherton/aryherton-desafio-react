import React, { useEffect, useContext } from 'react';

import DataContext from '../context/DataContext';
import { getAllRepos, getDataUser } from '../services/requestApi';

function Search() {
    const { setDataRepo, setDataUser } = useContext(DataContext);

    useEffect(() => {
        (async () => {
            const response = await getAllRepos('aryherton/repos');
            const dataUser = await getDataUser('aryherton');
            setDataRepo(response);
            setDataUser(dataUser);
        })();
    }, [setDataRepo, setDataUser]);

  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}

export default Search;