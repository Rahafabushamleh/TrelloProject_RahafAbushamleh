class hideTemplateActions{

    openTemplate(templateURL){
        cy.visit(templateURL)
        return this
    }


    clicksOnHideButton(){
        cy.wait(4000)
        cy.findByTestId('card-back-archive-button').click()
        return this
    } 

} 
export default hideTemplateActions;

