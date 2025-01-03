class deleteCardActions{   

    openCard(cardURL){
        cy.wait(2000)
        cy.visit(cardURL)
        return this
    }

    clicksOnArchiveButton(){
        cy.wait(4000)
        cy.findByTestId('card-back-archive-button').click()
        return this
    }

    clicksOnDeleteButton(){
        cy.findByTestId('card-back-delete-card-button').click()
        return this
    }

    confirmTheDeletion(){
        cy.wait(3000)
        cy.findByTestId('popover-confirm-button').click()
        return this
    }
}
export default deleteCardActions;