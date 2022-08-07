import styled from 'styled-components';

const StyledHeaderWrapper = styled.header `
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #c4c9ce;
  display: flex;
  align-items: end;
  justify-content: center;
  #header {
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid #F9826C;
    font-family: 'Encode Sans Condensed', sans-serif;
    img {
        align-self: center;
        width: 30px;
        height: 30px;
    }
    h3 {
        letter-spacing: 1.5px;
        font-size: 1.0rem;
        align-self: center;
    }
    span {
        align-self: center;
        text-align: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #c4c9ce;
    }
  }
`;



export default StyledHeaderWrapper;