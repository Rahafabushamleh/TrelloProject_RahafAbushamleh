/// <reference types="cypress" />

class cardAssertions{
    checkListIsContainCard(cardName){
        cy.findByTestId('card-name').should("contain",cardName);
        return this
    }

}

export default cardAssertions