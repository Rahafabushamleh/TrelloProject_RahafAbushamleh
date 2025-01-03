class boardAssertions{
    checkBoardNameIsContain(boardName){
        // cy.intercept("https://trello.com/1/boards/677198b81388eabcbc1d778b/markAsViewed").as("boards")
        // cy.wait("@boards")
        cy.wait(4000)
        cy.findByTestId("board-name-input").should("have.value",boardName)
    }
}
export default boardAssertions