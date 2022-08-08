import styled from 'styled-components';

const StyledCardReposWrapper = styled.aside `
  width: 57%;
  margin-top: 85px;
  #divRepo {
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #c4c9ce;
    font-family: 'Roboto', sans-serif;
    color: #878a91;
    #h1NameRepo {
      font-family: 'Roboto', sans-serif;
      font-size: 1.5rem;
      color: ${props => props.theme.colors.fontNameRepos};
      padding-top: 15px;
      margin-bottom: 5px;
    }
    #infoRepo {
      width: 100%;
      height: 100%;
      #pFullName {
        margin-bottom: 5px;
      }
      #pDescription {
        margin-bottom: 5px;
        width: 90%;
      }
      #infoComplement {
        display: flex;
        #spanLanguage {
          display: flex;
          margin-right: 15px;
          font-size: 14px;
        }
        #spanGitFork {
          display: flex;
          margin-right: 15px;
          #imgGitFork {
            width: 15px;
            height: 15px;
            margin-right: 3px;
          }
          #pForks {
            font-size: 14px;
          }
        }
        #spanLicense {
          display: flex;
          margin-right: 15px;
          font-size: 14px;
          #imgLicense {
            width: 15px;
            height: 15px;
            margin-right: 3px;
          }
        }
        #dateUpdated {
          font-size: 14px;
        }
      }
    } 
  }
`;



export default StyledCardReposWrapper;