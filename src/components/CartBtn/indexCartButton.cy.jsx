import React from 'react'
import CartButton from './index'

describe('<CartButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CartButton />)
  })
})