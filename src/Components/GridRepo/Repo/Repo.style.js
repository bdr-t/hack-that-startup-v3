import styled from 'styled-components';
import {darkTheme} from '../../../theme'

export const RepoDiv = styled.div`
  background-color: ${darkTheme.primary};
  border: 2px solid grey;
  border-radius: 8px;
  width: 300px;
  padding: 1em;
  word-wrap: break-word;
  a {
    outline: none;
    text-decoration: none;
    color: ${darkTheme.text};
  }

  h2 {
    width: fit-content;
    font-weight: 400;
    border-bottom: 5px solid #10B981;
    /* color: lightblue; */
    &:hover {
      font-weight: 700;
    }
  }
  @media only screen and (max-width: 956px) {
    width: 250px;
  }
`;

export const RepoFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .subrayar {
    border-bottom: 2px solid lightgray;
  }
  p {
    font-weight: 500;
    color: ${darkTheme.text};

    /* color: white; */
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;
  border-bottom: 2px solid ${darkTheme.secundary};
`;
