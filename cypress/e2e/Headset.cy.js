const access= require ("./validlogin.cy.js")
describe("headset",function(){
    before("login", function (){
        cy.visit("/")
        access.validlogin();
    });
    context("",function (){
        it("verify user is able to buy headset", function (){
            cy.get('#nav-orders > .nav-line-2').click()

        })
        
    context("",function (){
            it("",function (){
                cy.get('#anonCarousel3 > .a-carousel > [aria-posinset="1"] > :nth-child(1) > .a-link-normal > .a-section > .a-dynamic-image').click()
            })

        })
       
    })
})