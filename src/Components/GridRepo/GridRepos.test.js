import {render, screen } from '@testing-library/react'
import GridRepos from './GridRepos' 

describe('Login component', () => {
    let container;
    beforeEach(() => container = render(<GridRepos/>))

    it('componente se renderiza correctamente', ()=>{
        render(<GridRepos/>)
    })

    
    
  });
  