import { signup } from "../fixtures/selectors";
describe("order", function () {
    before(function () {
        cy.visit("/")
    });
    it ( "verify that user can place order",function ()  {
        cy.get('#nav-link-accountList-nav-line-1').click()
        cy.get('#createAccountSubmit').click()
        cy.get('#ap_customer_name').click()
        cy.get('#ap_customer_name').type("Alabi Abdulmalik")
        cy.get('#ap_email').click()
        cy.get('#ap_email').type("aramideabdulmalik@gmail.com")
        cy.get('#ap_password').click()
        cy.get('#ap_password').type("Jauntylittle@55")
        cy.get('#ap_password_check').click()
        cy.get('#ap_password_check').type("Jauntylittle@55")
        cy.get('#continue').click()
        cy.get('#cvf-input-code').click()
        cy.get('#cvf-input-code').type("839019")
        cy.get('#cvf-submit-otp-button > .a-button-inner > .a-button-input').click()
        
                

    
    })
})

