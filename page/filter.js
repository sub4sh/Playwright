class Filter {
    constructor(page) {
        this.page = page;
        // Locates the dropdown box by its class name
        this.clickfilter = page.locator('.product_sort_container');
    }

    async sortBy(optionValue) {
        // Uses Playwright's native selectOption method
        await this.clickfilter.selectOption(optionValue);
    }
}

// ✅ Explicitly wrap Filter in an object export
module.exports = { Filter };
