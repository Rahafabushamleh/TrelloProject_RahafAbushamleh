/// <reference types="cypress" />
class boardActions{

    clickOnNavbarCreateButton(){
        cy.findByTestId('header-create-menu-button').click()
        return this;
    }
    
    clickOnCreateBoardOption(){
        cy.findByTestId('header-create-board-button').click()
        return this;
    }

    typeInBoardTitleInput(boardName){
        cy.findByTestId('create-board-title-input').type(boardName)
        return this;
    }

    clickOnCreateButton(){
        cy.findByTestId('create-board-submit-button').click()
        return this;
    }
}
export default boardActions;