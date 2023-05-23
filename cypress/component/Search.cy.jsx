import App from '../../src/App'
import Home from '../../src/pages/Home'

describe('Test the  functionality', () => {
  it('check  everything working', () => {
    cy.mount(<Home />)
  })
})
