describe("Is Rose Gold Bracelet Purchase Functionality Working?", function () {
    it("Visiting chronograph.am", function visit () {
        cy.visit("https://chronograph.am/");
        cy.scrollTo(0, 500);
        cy.get('.home_grid_itm').eq(1).click();
        cy.url().should('include', "/brand/vhernier");
        const roseGoldReferenceNumber = "0N1501BR204 259693";
        cy.scrollTo(0, 500);
        cy.get('.products_list_itm_mask').eq(1).click();
        cy.get('.product_inner_name').should('contain.text',"Freccia Mini");
        cy.get('.add_to_cart_button').eq(0).click();
        cy.get('.header_icon5').eq(0).click();
        cy.url().should('include', 'bag');
        cy.get('.product_inner_name').should('contain.text',roseGoldReferenceNumber);
    })
})

