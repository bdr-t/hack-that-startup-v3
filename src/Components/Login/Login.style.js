import styled from 'styled-components';
import {darkTheme} from '../../theme'

export const FlexForm = styled.form`
    display:flex;
    flex-direction: column;
  padding: 3em;
  background-color: ${darkTheme.primary};
  border-radius: 20px;
  gap: 1em;
  p{
    color: red;
  }
`;

export const Label = styled.label`
    font-weight: 500;
    font-size: 18px;
`

export const Input = styled.input`
height: 30px;
outline: none;
`

export const Button = styled.button`
  height: 30px;

`