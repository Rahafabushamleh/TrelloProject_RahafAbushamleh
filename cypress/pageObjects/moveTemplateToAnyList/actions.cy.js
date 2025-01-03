/// <reference types="cypress" />


class moveTemplateActions{
    
    openTemplate(templateURL){
        cy.wait(2000)
        cy.visit(templateURL);
        return this;
    }

    clicksOnMove(){
        cy.wait(7000)
        cy.findByTestId('card-back-move-card-button').click()
        return this
    }

    chooseList(listName) {
        cy.wait(5000);
        cy.findByTestId('move-card-popover-select-list-destination').type(listName).wait(3000)
        return this
    }
    
     
    clicksOnMoveButton(){
        cy.findByTestId('move-card-popover-move-button').click()
        return this
    }
          
}
export default moveTemplateActions;