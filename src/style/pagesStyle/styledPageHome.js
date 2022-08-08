import styled from 'styled-components';

const StyledHomeWrapper = styled.div `
  width: 100%;
  height: 100vh;
  main {
    display: flex;
    width: 100%;
    height: 100%;
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 43%;
      height: 100%;
      #divBackImg {
        width: 360px;
        height: 330px;
      }
      #imgUser {
        position: absolute;
        margin-top: -35px;
        border-radius: 50%;
        width: 360px;
        height: 360px;
      }
      #nameUser {
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.2rem;
        letter-spacing: 1px;
        width: 360px;
        height: 70px;
        align-self: center;
      }
      button {
        margin-top: 5px;
        width: 360px;
        height: 40px;
        background-color: ${props => props.theme.colors.buttonFollowBG};
        border: 1px solid #c4c9ce;
        border-radius: 5px;
      }
      button:hover {
        color: #FFFFFF;
        font-size: 18px;
        background-color: #c4c9ce;
      }
      p {
        margin-top: 20px;
        font-family: 'Noto Sans', sans-serif;
        width: 360px;
        font-weight: bolder;
      }
      #followers {
        display: flex;
        align-items: center;
        width: 360px;
        font-size: 14px;
        height: 40px;
        font-family: 'Open Sans', sans-serif;
        margin-left: 5px;
        font-family: 'Noto Sans', sans-serif;
        img {
          width: 20px;
          height: 20px;
        }
        #icon_people {
          margin-right: 5px;
        }
        span {
          font-weight: bolder;
        }
        .txtFollowers {
          font-weight: normal;
          margin-left: 5px;
          margin-right: 5px;
        }
      }
      #divImgEmail {
        border-bottom: 1px solid #c4c9ce;
        width: 360px;
        height: 45px;
        display: flex;
        align-items: center;
        font-family: 'Noto Sans', sans-serif;
        #imgEmail {
          width: 20px;
        }
      }
    }
  }
`;



export default StyledHomeWrapper;