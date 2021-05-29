import {render, screen } from '@testing-library/react'
import UserFooter from './UserFooter' 

describe('UserFooter component', () => {
    let container;
    beforeEach(() => container = render(<UserFooter/>))

    it('componente se renderiza correctamente', ()=>{
        render(<UserFooter/>)
    })

    it('aparece "followers"', ()=>{
        expect(screen.getByText('followers')).not.toBe(null) 
    })

    it('aparece "following"', ()=>{
        expect(screen.getByText('following')).not.toBe(null) 
    })
   

  });