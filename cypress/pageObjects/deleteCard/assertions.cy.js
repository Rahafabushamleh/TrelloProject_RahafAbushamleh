class deleteCardAssertions{

    checkListIfCrdExist(cardName){
        cy.wait(3000)
        cy.findByTestId("list-name").contains(cardName).should('not.exist');
        return this;
    }
}

export default deleteCardAssertions