import {render, screen } from '@testing-library/react'
import User from './User' 

describe('User component', () => {
    let container;
    beforeEach(() => container = render(<User/>))

    it('componente se renderiza correctamente', ()=>{
        render(<User/>)
    })
   

  });