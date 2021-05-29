import {render, screen } from '@testing-library/react'
import Repo from './Repo' 

describe('Login component', () => {
    let container;
    beforeEach(() => container = render(<Repo/>))

    it('componente se renderiza correctamente', ()=>{
        render(<Repo/>)
    })

    it('aparece titulo', ()=>{
        expect(container.getByRole('heading')).not.toBe(null);
    })

    it('aparece stars', ()=>{
        expect(screen.getByText('stars')).not.toBe(null);
    })

    it('aparece forks', ()=>{
        expect(screen.getByText('forks')).not.toBe(null);
    })
    
  });
  