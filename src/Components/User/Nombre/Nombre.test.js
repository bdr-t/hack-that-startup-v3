import {render, screen } from '@testing-library/react'
import Nombre from './Nombre' 

describe('Nombre component', () => {
    let container;
    beforeEach(() => container = render(<Nombre/>))

    it('componente se renderiza correctamente', ()=>{
        render(<Nombre/>)
    })
   

  });