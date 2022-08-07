import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DataProvider from './context/DataProvider';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import { ThemeProvider } from 'styled-components';
import light from './style/themes/light';
import GlobalStyle from './style/global/globalStyle';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <DataProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route exact path="/" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
