import styled from 'styled-components';

export const GridUser = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 956px) {
      flex-direction: column;
  }
`;

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
  
`;
