class moveTemplateAssertions{

    checkTemplateInWhichListInside(listName){
        const expectedListName = listName.replace("{enter}", "")
        cy.get('.css-1mququ6').should("contain",expectedListName)
        return this
    }

    checkTemplateInWhichListOut(listName,templateName){
        const expectedListName = listName.replace("{enter}", "")
        cy.findByTestId('CloseIcon').first().click()
        cy.contains(expectedListName)
        cy.findByTestId('card-name').should("contain",templateName)
        cy.wait(2000)
        return this
    }
}

export default moveTemplateAssertions;