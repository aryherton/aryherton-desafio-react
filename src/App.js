import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DataProvider from './context/DataProvider';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
