/// <reference types="cypress"
class templateAssertions{

    checkTemplateBackName(templateName){
        cy.wait(2000)
        cy.findByTestId('card-back-title-input').should('contain',templateName)
        return this
    }

    checkTemplateIfExistInCardsList(templateName){
        cy.wait(4000)
        cy.findByTestId('CloseIcon').first().click({force: true})
        cy.findByTestId('card-name').should("contain",templateName);
        return this
    }
}

export default templateAssertions