import {AppComponent} from "../src/app/app.component";

describe('AppComponent.cy.ts', () => {
  it('mount', () => {
    cy.mount( AppComponent )
    cy.get('.highlight-card > span').contains( 'app is running!')
  })
})
