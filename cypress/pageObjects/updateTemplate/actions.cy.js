class updateTemplateActions{

    openTemplate(templateURL){
        cy.visit(templateURL);
        return this;
    }

    clicksOnNameInputField(newTemplateName){
        cy.wait(7000)
        cy.findByTestId('card-back-title-input').clear().type(newTemplateName)
        cy.findByTestId('card-back-title-input').type("{enter}")
        return this
    }
}

export default updateTemplateActions;