describe("frontdesk", function () {
    before(function () {
        cy.visit("/")
        access.validlogin();
        
    });
    context("",function () {
        it("verify the functionality of the front desk feature", function ()  {
            cy.get(':nth-child(5) > a > .card > .details > .title').click()


            
         
        })
    })
})
