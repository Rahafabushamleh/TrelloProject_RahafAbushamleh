/// <reference types="cypress" />

class cardActions{

    openBoard(boardURL){
        cy.visit(boardURL);
        return this;
    }

    clickOnAddACardButton(boardURL){
        cy.wait(4000)
        cy.findByTestId("list-add-card-button").first().click()
        return this;
    }

    typeNameInCardTitleInputField(cardName){
        cy.findByTestId("list-card-composer-textarea").type(cardName)
        return this;
    }

    clickOnAddCardButton(cardName){
        cy.findByTestId("list-card-composer-add-card-button").click()
        return this;
    }
}

export default cardActions;