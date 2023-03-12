describe("login", function () {
    this.beforeEach(function () {
        cy.visit("/");
    })
    //negative test scenario
    context("", function () {
        it("verify the functionality of the login page", function () {
            cy.get('#nav-link-accountList-nav-line-1').click()
            cy.get('#ap_email').click()
            cy.get('#ap_email').type("aaa@mailinator.com")
            cy.get('.a-button-inner > #continue').click()
            cy.get('#ap_password').click()
            cy.get('#ap_password').type("little Jaunty")
            cy.get('#signInSubmit').click()

        })
        //Positive test scenario
        it("verify that user is able to login with the correct email and password", function () {
            cy.get('#nav-link-accountList-nav-line-1').click()
            cy.get('#ap_email').click()
            cy.get('#ap_email').type("aramideabdulmalik@gmail.com")
            cy.get('.a-button-inner > #continue').click()
            cy.get('#ap_password').click()
            cy.get('#ap_password').type("Jauntylittle@55")
            cy.get('#signInSubmit').click()

        })

    })

})