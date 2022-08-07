import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import DataContext from '../context/DataContext';
import Header from '../components/Header';

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
      <Header />
    </div>
  );
}

export default Home;