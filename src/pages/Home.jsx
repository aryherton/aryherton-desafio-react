import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import DataContext from '../context/DataContext';

function Home() {
  const navigate = useNavigate();
  const { dataUser } = useContext(DataContext);
  useEffect(() => {
    if (!dataUser) {
      navigate('/');
    }
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;