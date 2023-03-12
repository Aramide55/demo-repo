export const validlogin= () => {
    
    cy.get('#nav-link-accountList-nav-line-1').click()
            cy.get('#ap_email').click()
            cy.get('#ap_email').type("aramideabdulmalik@gmail.com")
            cy.get('.a-button-inner > #continue').click()
            cy.get('#ap_password').click()
            cy.get('#ap_password').type("Jauntylittle@55")
            cy.get('#signInSubmit').click()
    


}