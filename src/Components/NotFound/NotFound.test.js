import {render, screen } from '@testing-library/react'
import NotFound from './NotFound' 

describe('NotFound component', () => {
    let container;
    beforeEach(() => container = render(<NotFound/>))

    it('componente se renderiza correctamente', ()=>{
        render(<NotFound/>)
    })

    it('aparece "No se ha encontrado ese nombre de usuario"', ()=>{
        expect(screen.getByText('No se ha encontrado ese nombre de usuario')).not.toBe(null) 
    })

  

  });
  