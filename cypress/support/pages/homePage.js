import constants from "../constants";
import 'cypress-wait-until';

class HomePage{
    //Web Elements
    get languagePopOverButton()
    {  return cy.get('button[aria-controls="language-region-popover"][aria-label="Select language and region"]');}

    get countryMenu()
    { return cy.contains('button[role="menuitem"]', /country|país/i, { timeout: 15000});}

    get searchCountryInput() 
    { return cy.get('input[aria-label*="Search countries"]');}

    get countryOption()
    { return cy.get('a[data-analytics-event="Country Changed"]');}

    get countryTextFlag()
    { return cy.findByAltText(new RegExp(`${constants.COUNTRY_REGION} flag`, 'i'));}

    //Actions
    navegate(){
        //Force bigger size
        cy.viewport(1920, 1080);
        //Navegate to Ria Money website
        cy.visit(constants.BASE_URL, {timeout: 30000});
        cy.get('input[id="amount-from"]', {timeout: 15000}).should('be.visible');
        cy.get('nav', { timeout: 15000 }).should('be.visible');
        //Check if the website is correct
        cy.window({ timeout: 10000 }).its('location.href').should('include', constants.BASE_URL);
        //Check if the page title contains Ria Money Transfer
        cy.document({ timeout: 15000 }).its('title').should('include', constants.PAGE_TITLE);
        return this;
    }
    
    changeRegion(countryRegion, countryInitials){
        //Open Language & Region PopOver
        cy.clickUntilOpen('button[aria-controls="language-region-popover"][aria-label="Select language and region"]');
        //Open Country Menu
        this.countryMenu.should('be.visible').click();
        //Check if Country Menu is opened and enter Country
        this.searchCountryInput.should('be.visible').type(countryRegion);
        //Check if Country was entered
        this.searchCountryInput.should('have.value', countryRegion);
        cy.intercept('GET', new RegExp(`.*/(es|en)-${countryInitials}/.*`)).as('regionNavigation');     
        //Select new Country
        this.countryOption.contains(new RegExp(countryRegion, 'i')).should('be.visible').click();
        cy.wait('@regionNavigation', { timeout: 20000 });   
        this.countryTextFlag.should('be.visible');
        
        return this;
    }
}

export default new HomePage();