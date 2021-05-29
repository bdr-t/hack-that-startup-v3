import {render, screen } from '@testing-library/react'
import Lista from './Lista' 

describe('Lista component', () => {
    let container;
    beforeEach(() => container = render(<Lista/>))

    it('componente se renderiza correctamente', ()=>{
        render(<Lista/>)
    })
   

  });
  