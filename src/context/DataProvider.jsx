import React, { useState } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
    const [dataUser, setDataUser] = useState('');
    const [dataRepo, setDataRepo] = useState([]);
    const OBJ_DATA_AND_FUNCTIONS = {
        dataUser,
        setDataUser,
        dataRepo,
        setDataRepo
    };

  return (
    <DataContext.Provider value={OBJ_DATA_AND_FUNCTIONS}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;