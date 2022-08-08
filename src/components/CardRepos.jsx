import React, { useContext } from 'react';

import DataContext from '../context/DataContext';
import StyledCardReposWrapper from '../style/componentsStyle/styledCardRepos';

import CircleBlack from '../img/circleBlack.png';
import GitFork from '../img/git-fork.png';
import License from '../img/license.png';
import { objMonth } from '../help/objMonth';

function CardRepos() {
  const { dataRepo } = useContext(DataContext);

  const getDate = (date) => {
    const dateArr = date.split('-');
    const month = dateArr[1];
    const day = dateArr[2].split('T')[0];

    return (
      <span id="dateUpdated">{`Updated on ${day} ${objMonth[month]}` }</span>
    );
  };
  
  return (
    <StyledCardReposWrapper>
      { dataRepo?.map((repo) => (
        <div id="divRepo" key={repo.id}>
          <a href={repo.html_url }>
            <h1 id="h1NameRepo">{ repo.name }</h1>
          </a>
          <div id="infoRepo">
            { repo.full_name && <p id="pFullName">{ repo.full_name }</p> }
            { repo.description && <p id="pDescription">{ repo.description }</p> }
            <div id="infoComplement">
              { repo.language
                &&
                  <span id="spanLanguage">
                    <img src={ CircleBlack } alt="icon_marking" />
                    <p id="pLanguage">
                      { repo.language }
                    </p>
                  </span>
              }
              { repo.forks > 0
                &&
                  <span id="spanGitFork">
                    <img id="imgGitFork" src={ GitFork } alt="icon_git_fork" />
                    <p id="pForks">{repo.forks}</p>
                  </span>
              }
              { repo.license
                &&
                <span id="spanLicense">
                  <img id="imgLicense" src={ License } alt="icon_license" />
                  <p id="pLicense">{ repo.license.spdx_id }</p>
                </span>
              }
              { repo.updated_at
                &&
                  getDate(repo.updated_at)
              }
            </div>
          </div>
        </div>
      )) }
    </StyledCardReposWrapper>
  );
}

export default CardRepos;