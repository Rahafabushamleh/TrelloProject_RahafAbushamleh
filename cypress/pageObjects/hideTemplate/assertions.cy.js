class hideTemplateAssertions{

    checkButtonIsContain(){
        cy.findByTestId('card-back-unarchive-card-button').should('exist');
        return this

    }
    
    checkTemplateIfExistInTheList(){
        cy.findByTestId('CloseIcon').first().click()
        cy.findByTestId('list-cards').find('li').should('not.exist');   
        cy.wait(2000)
        return this

        }

}

export default hideTemplateAssertions;