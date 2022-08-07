import React, { useContext } from 'react';

import StyledHeaderWrapper from '../style/componentsStyle/styledCompHeader';
import DataContext from '../context/DataContext';
import Repos from '../img/repos.png';

function Header() {
  const { dataRepo } = useContext(DataContext);

  return (
    <StyledHeaderWrapper>
      <div id="header">
        <img src={ Repos } alt="repositories" />
        <h3>Repositories</h3>
        <span>{ dataRepo?.length }</span>
      </div>
    </StyledHeaderWrapper>
  );
}

export default Header;