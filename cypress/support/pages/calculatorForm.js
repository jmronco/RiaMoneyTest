import constants from "../constants";

class CalculatorForm {
    //Web Elements
    get amountFromInput() 
    { return cy.get('input[id="amount-from"]', { timeout: 5000 });}

    get destinationButton() 
    { return cy.findByRole('button', { name: /select destination|selecciona destino/i });}

    get countrySearchBox() 
    { return cy.findByRole('searchbox', { name: /search currency|busca moneda/i });}

    get listBoxCurrency()
    { return cy.findAllByRole('option').contains('span', /^[A-Z]{3}$/);}

    get spanTotalAmount()
    { return cy.get('span[aria-live="polite"]', { timeout: 15000 });}

    get convertedAmountValue() 
    { return cy.get('input[id="amount-to"]');}
    
    get startYourTransferButton()
    { return cy.get('a.inline-flex[href*="secure.riamoneytransfer.com"]').filter(':contains("Start your transfer"), :contains("Enviar Dinero")');;}

    get minimumAmountMessage()
    { return cy.contains('#amount-error', /Minimum is/i, { timeout: 15000 });}

    get maximumAmountMessage()
    { return cy.contains('#amount-error', /Maximum is/i, { timeout: 15000 });}

    get invalidAmountErrorMessage()
    { return cy.contains('#amount-error', /Please enter a valid amount|Unable to get rates. Please try again./i, {timeout: 15000});}


    //Actions
    typeAmountFrom(newAmountFrom) {
        //Type Amount From
        this.amountFromInput.should('be.visible').then($input => {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor( window.HTMLInputElement.prototype, 'value').set;
            nativeInputValueSetter.call($input[0], newAmountFrom);
            $input[0].dispatchEvent(new Event('input', { bubbles: true }));
            $input[0].dispatchEvent(new Event('change', { bubbles: true }));
            $input[0].dispatchEvent(new Event('blur', { bubbles: true }));
        });
        this.amountFromInput.invoke('val').then(val => {
            console.log(`Actual value of input: ${val}`);
        });
        //Save the value that was entered
        cy.wrap(newAmountFrom.replace(/\D/g, '')).as('amountFromValue');
        return this;
    }

    typeInvalidAmountFrom(invalidAmountFrom) {
        //Type Invalid Amount From
        this.amountFromInput.should('be.visible').then($input => {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor( window.HTMLInputElement.prototype, 'value').set;
            nativeInputValueSetter.call($input[0], invalidAmountFrom);
            $input[0].dispatchEvent(new Event('input', { bubbles: true }));
            $input[0].dispatchEvent(new Event('change', { bubbles: true }));
            $input[0].dispatchEvent(new Event('blur', { bubbles: true }));
        });
        this.amountFromInput.invoke('val').then(val => {
            console.log(`Actual value of input: ${val}`);
        });
        //Save the value that was entered
        cy.wrap(invalidAmountFrom.replace(/\D/g, '')).as('amountFromValue');
        return this;
    }

    typeAlphaCharsAmount(invalidAmountFrom) {
        this.amountFromInput.should('be.visible').focus().type('{selectall}').type(invalidAmountFrom);
        this.amountFromInput.invoke('val').then(val =>{
            console.log(`Actual value of input: ${val}`);
        });
        return this;
    }

    typeSpecialCharsAmount(invalidAmountFrom) {
        this.amountFromInput.should('be.visible').then($input => {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype, 'value'
            ).set;
            nativeInputValueSetter.call($input[0], invalidAmountFrom);
            $input[0].dispatchEvent(new Event('input', { bubbles: true }));
            $input[0].dispatchEvent(new Event('change', { bubbles: true }));
        });
        this.amountFromInput.invoke('val').then(val => {
            console.log(`Actual value of input: ${val}`);
        });
        return this;
    }


    selectCountryDestination(countryDestiny, countryCurrency) {
        //Select Country Destination
        this.destinationButton.scrollIntoView().should('be.visible');
        this.destinationButton.click();
        //Type Country Destination
        this.countrySearchBox.should('be.visible').type('{selectall}').type(countryDestiny);
        this.countrySearchBox.should('have.value', countryDestiny);
        cy.contains('span', countryDestiny, { timeout: 15000 }).should('be.visible');
        
        cy.get('body').then(($body) => {
            //Search the currency list items
            const currencyRegex = new RegExp(countryCurrency, 'i');
            // Check if the target currency option is visible in the list
            const countryRow = $body.find(`li:contains("${countryDestiny}"), div:contains("${countryDestiny}")`).last();
            const rowText = countryRow.text();
            const hasMultipleCurrencies = rowText.includes(',');
            console.log(`The country ${countryDestiny} has multiple currencies: ${hasMultipleCurrencies}`);
            //Select Country Destination
            cy.contains('span', countryDestiny, {timeout: 10000}).should('be.visible').click();
            if(hasMultipleCurrencies) {
                console.log(`Target currency ${countryCurrency} found. Selecting it...`);
                //Select the target currency
                cy.findByRole('option', { name: currencyRegex }).should('be.visible').click();
                //Check if the Country Currency was selected correctly
                this.destinationButton.should('be.visible').and('contain.text', countryCurrency);
                this.convertedAmountValue.should('be.visible');
            } else {
                // If the option for the target currency is not visible, it means the system auto-selected the default currency
                console.log(`The option for ${countryCurrency} is not visible. Assuming single default currency.`);
            }
            // Validate that the main destination button already contains the correct currency by default
            this.destinationButton.should('be.visible').and('include.text', countryCurrency);
        }); 
        return this;    
    } 

    checkTotalAmountToPay(countryFromCurrency, amountFrom) {
        this.convertedAmountValue.should('be.visible');
        const expectedDigits = amountFrom.replace(/\D/g, '');
        this.spanTotalAmount.should('be.visible')
        .and('include.text', countryFromCurrency)
        .and('not.have.text', '').invoke('text').should(text => {
                const totalDigits = text.replace(/[^0-9]/g, '');
                console.log(`Total: ${totalDigits} | Expected: ${expectedDigits}`);
                expect(totalDigits).to.include(expectedDigits);
        });
        return this;
    }

    checkTotalAmountToPayUpdated(countryFromCurrency, amountFrom) {
        this.convertedAmountValue.should('be.visible');
        const expectedDigits = amountFrom.replace(/\D/g, '');
        this.spanTotalAmount.should('be.visible')
        .and('include.text', countryFromCurrency).invoke('text').should(text => {
            const totalDigits = text.replace(/[^0-9]/g, '');
            console.log(`Total: ${totalDigits} | Expected: ${expectedDigits}`);
            expect(totalDigits).to.include(expectedDigits);
    });
    return this;
}

    pressButtonStartYourTransfer(){
        //Click on Start Your Transfer button
        this.startYourTransferButton.scrollIntoView().should('be.visible');
        this.startYourTransferButton.click();
        cy.url({ timeout: 10000 }).should('include', constants.BASE_SECURE_URL);
    }

    showMinimumAmountErrorMessage(){
        this.minimumAmountMessage.should('be.visible').invoke('text').then((text) => {
            console.log(`Minimum amount message: ${text}`);
        });
        return this;
    }

    dontShowMinimumAmountErrorMessage(){
        this.minimumAmountMessage.should('not.exist');
        return this;
    }

    showMaximunAmountErrorMessage(){
        this.maximumAmountMessage.should('be.visible').invoke('text').then((text) => {
            console.log(`Maximum amount message: ${text}`);
        });
        return this;
    }

    dontShowMaximunAmountErrorMessage(){
        this.maximumAmountMessage.should('not.exist');
        return this;
    }
    
    showEnterValidAmountErrorMessage(){
        this.invalidAmountErrorMessage.should('be.visible');
        return this;
    }

    validateDisabledStateButtonStartYourTransfer(){
        this.startYourTransferButton.should('be.disabled');
        return this;
        
    }

    validateAmountFromInputNegativeValue(){
        this.amountFromInput.should('not.contain.value', '-');
        return this;
    }

    validateAmountFromInputNoneAlphaCharsValues(){
        this.amountFromInput.invoke('val').should('match', /^[^a-zA-Z]*$/);
        return this;
    }

    validateAmountFromInputCommaDots(){
        this.amountFromInput.invoke('val').should('match', /^[.,]*$/);
        return this;
    }
}

export default new CalculatorForm();
