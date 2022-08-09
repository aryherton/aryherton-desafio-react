import React from 'react';
import { useRoutes } from 'react-router-dom';

import DataProvider from './context/DataProvider';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import { ThemeProvider } from 'styled-components';
import light from './style/themes/light';
import GlobalStyle from './style/global/globalStyle';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Search /> },
    { path: '/home', element: <Home /> },
    {path: '*', element: <NotFound />},
  ]);
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <DataProvider>
        { routes }
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
