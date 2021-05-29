import styled from 'styled-components'
import {darkTheme} from '../../../theme'


export const Flex = styled.div`

    display: flex;
    justify-content: space-around;

    color: ${darkTheme.colorAccent};
    font-weight: 500;
    @media only screen and (max-width: 956px) {
      flex-direction: column;
      gap: 1em;
  }

`