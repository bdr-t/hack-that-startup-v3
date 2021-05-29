import styled from 'styled-components';
import {darkTheme} from '../../../theme'

export const Flex = styled.div`
  color: ${darkTheme.text};
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  a{
      text-decoration: none;
      cursor: pointer;
      color: ${darkTheme.text};
      &:hover{
          color: lightblue;
      }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;
`;

