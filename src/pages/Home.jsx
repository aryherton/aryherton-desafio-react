import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import DataContext from '../context/DataContext';
import Header from '../components/Header';
import StyledHomeWrapper from '../style/pagesStyle/styledPageHome';
import People from '../img/people.png';
import Star from '../img/star.png';
import Email from '../img/email.png';

function Home() {
  const navigate = useNavigate();
  const { dataUser } = useContext(DataContext);
  useEffect(() => {
    if (!dataUser) {
      navigate('/');
    }
  }, []);
  return (
    <StyledHomeWrapper>
      <Header />
      <main>
        <section>
          <div id="divBackImg"></div>
          <img id="imgUser" src={ dataUser.avatar_url } alt="img_user" />
          <div id="nameUser">
            <h1>{ dataUser.name }</h1>
            <span>{ dataUser.login }</span>
          </div>
          <button>Follow</button>
          <p>{ dataUser.bio }</p>
          <div id="followers">
            <img id="icon_people" src={ People } alt="icon_people" />
            <span>
              { dataUser.followers }
              <span className="txtFollowers">Followers</span>
              { dataUser.following }
              <span className="txtFollowers">Following</span>
            </span>
            <img id="icon_star" src={ Star } alt="icon_star" />
          </div>
          <div id="divImgEmail">
            <img id="imgEmail" src={ Email } alt="icon_email" />
            { dataUser.email }
          </div>
        </section>
        <aside>Repositoriossss</aside>
      </main>
    </StyledHomeWrapper>
  );
}

export default Home;