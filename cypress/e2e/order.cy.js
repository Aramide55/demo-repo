const access =require ("./validlogin.cy");
describe("order", function () {
    before("order", function () {
    cy.visit("/")
    access.validlogin();    
    });
    
    context("",function () {
        it("verify that usser is able to place order on a desired item", function (){
            cy.get('#nav-logo-sprites').click()
            cy.get('#twotabsearchtextbox').type("Headset")
            cy.wait(1000)
            cy.get('#nav-search-submit-button').click()
            cy.get('[data-asin="B01H6GUCCQ"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').click()
            cy.get('#add-to-cart-button').click()
            cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
            cy.get('#address-ui-widgets-DetectLocationButtonContainer > .a-box > .a-box-inner > :nth-child(1) > .a-row'). click()
            cy.wait(1000)
            cy.get('.a-checkbox > label').click()
            cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input').click()


            


        })

    })


})


