import styled from 'styled-components';

const StyledSearchWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.pageSearchBG};

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    section {
      width: 300px;
      height: 70px;
      display: flex;
      flex-direction: column;
      label {
        font-family: 'Encode Sans Condensed', sans-serif;
        letter-spacing: 1px;
        font-size: 20px;
      }
      input {
        margin-top: 2px;
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 2px solid #c4c9ce;
        ::-moz-placeholder {
           font-style: italic;
           color: ${props => props.theme.colors.placeholderInput};
        }
        text-indent: 10px;
      }
    }
    button {
      color: #9fa7ad;
      font-size: 16px;
      margin-top: 23px;
      width: 90px;
      height: 40px;
      background-color: ${props => props.theme.colors.buttonSearchBG};
      border-radius: 5px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .errorMessage {
      position: absolute;
      margin-top: 120px;
      color: #8c151e;
      font-weight: bolder;
      font-size: 14px;
    }
  }
`;



export default StyledSearchWrapper;