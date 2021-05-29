import styled from 'styled-components';
import {darkTheme} from '../../theme'

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 300px;
  place-self: center;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 1em;
  padding-top: 1.5em;

  img {
    place-self: center;
    border-radius: 50%;
    border: 5px solid white;
  }
  background-color: ${darkTheme.primary};
  @media only screen and (max-width: 956px) {
    flex-direction: row;
    border-top-left-radius: 0;
    border: none;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const StickyDiv = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  display: grid;
  @media only screen and (max-width: 956px) {
    height: auto;
    position: relative ;
  }
`;
