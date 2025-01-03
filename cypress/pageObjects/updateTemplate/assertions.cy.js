class updateTemplateAssertions{

    checkNameIfChangedOnThePopUp(newTemplateName){
        cy.findByTestId('card-back-title-input').should("contain",newTemplateName)
        return this
    }

    checkNameIfChangedOnTheCardList(newTemplateName){
        cy.wait(7000)
        cy.findByTestId('CloseIcon').first().click().wait(3000)
        cy.findByTestId('card-name').should("contain",newTemplateName)
        return this
    }
}
export default updateTemplateAssertions;