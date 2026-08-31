import constants from "../constants";

class RegistrationPage {
    validatePageElements(){
        cy.origin(constants.BASE_SECURE_URL, { args: { url: constants.BASE_SECURE_URL } }, ({ url }) => {
            //Check if Title is visible
            cy.contains('h1', /Where would you like to send money?|¿A dónde te gustaría enviar dinero?|Bienvenido/i).should('be.visible');
            //Check if label From is visible
            cy.contains('label',/From|De/i).should('be.visible');
            //Check if Country Input is visible
            cy.get('div[analytics-name="register-country-input"]').should('be.visible');
            //Check if label To is visible
            cy.contains('label',/To|A/i).should('be.visible');
            //Check if Select a Country menu is visible
            cy.contains('div', /Select a country|Elige un país/i).should('be.visible');
            //Check if Continue Button is visible
            cy.get('button[analytics-name="register-country-submit"]').should('be.visible');    
        });
        return this;
    } 
}

export default new RegistrationPage();