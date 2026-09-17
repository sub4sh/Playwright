class Cart {
    constructor(page){
        this.page = page;
        this.clickcart = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        
        // 1. Added locator for the shopping cart container badge
        this.cartBadge = page.locator('#shopping_cart_container'); 
        
        this.checkout = page.locator('#checkout');
        this.firstname = page.locator('#first-name');
        this.lastname = page.locator('#last-name');
        this.postalcode = page.locator('#postal-code');
        this.clickcontinue=page.locator('#continue');
        this.clickfinish=page.locator('#finish');
    }

    async carto(name, last, postal){
        await this.clickcart.click();     // Clicks 'Add to Cart'
        await this.cartBadge.click();     // 2. FIXED FLOW: Opens the cart page first!
        await this.checkout.click();     // Now the checkout button is visible to click
        await this.firstname.fill(name);
        await this.lastname.fill(last);
        await this.postalcode.fill(postal);
        await this.clickcontinue.click();
        await this.clickfinish.click();
        
    }
}

// 3. FIXED CRASH: Added the missing export line so your tests can run
module.exports = { Cart }; 
