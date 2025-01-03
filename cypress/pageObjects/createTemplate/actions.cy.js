class templateActions{

    navigateToBoard(boardURL){
        cy.visit(boardURL)
        return this
    }
    
    clicksOnCreateFromTemplate(){
        cy.wait(7000)
        cy.findByTestId('TemplateCardIcon').first().click({ force: true })
        return this
    }
    
    clicksOnCreateNewTemplateButton(){
        cy.findByTestId('create-new-template-card-button').click()
        return this

    }

    typeTemplateNameIntoTemplateInputField(templateName){
        cy.wait(3000)
        cy.findByTestId("create-template-card-composer").type(templateName)
        return this

    }

    clicksOnAddButton(){        
        cy.findByTestId('new-template-card-submit-button').click()
        return this

    }
}
export default templateActions