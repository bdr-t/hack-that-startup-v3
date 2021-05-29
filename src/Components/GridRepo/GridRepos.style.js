import styled from 'styled-components';

export const Grid = styled.div`
  padding: 1em;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  place-content: center;
  gap: 1.5em;
  justify-content: center;
  @media only screen and (max-width: 956px) {
    width: auto;
    grid-template-columns: repeat(auto-fill, 250px);
  }
`;
