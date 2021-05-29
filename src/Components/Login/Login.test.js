import {render, screen } from '@testing-library/react'
import Login from './Login' 

describe('Login component', () => {
    let container;
    beforeEach(() => container = render(<Login/>))

    it('componente se renderiza correctamente', ()=>{
        render(<Login/>)
    })

    it('aparece el texto del labal "Introduzca su nombre de usuario de Github:"', ()=>{
        expect(container.getByLabelText('Introduzca su nombre de usuario de Github:')).not.toBe(null);
    })

    it('aprece correctament el placeholder del input', ()=>{
        expect(container.getByPlaceholderText('nombre de usuario')).not.toBe(null)
    })

    it('aparece button', ()=>{
        expect(container.getByRole('button')).not.toBe(null)
    })

    it('button es de tipo "sumbit"',()=>{
        expect(container.getByRole('button').type).toBe('submit')
    })

  });
  