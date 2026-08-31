import constants from "../constants";

class LoginPage {
    //Actions
    acceptCookies(){
        cy.origin(constants.BASE_SECURE_URL, { args: { url: constants.BASE_SECURE_URL } }, ({ url }) => {
            //Accept Cookies
            cy.get('button[analytics-name="consent-manager-allow-all-cookies"]').should('be.visible').click();
        }); 
        return this;
    }

    validatePageElements(){
        cy.origin(constants.BASE_SECURE_URL, { args: { url: constants.BASE_SECURE_URL } }, ({ url }) => {
            //Check if Register Link is visible
            cy.get('a[analytics-name="login-register"]').should('be.visible');
            //Check if label Phone or email is visible
            cy.contains('label, span', /Phone or email|Teléfono o correo electrónico/i).should('be.visible');
            //Check if input Phone or email is visible
            cy.get('input[analytics-name="login-email-input"]').should('be.visible');
            //Check if label Password is visible
            cy.contains('label, span', /Password|Contraseña/i).should('be.visible');
            //Check if input Password is visible
            cy.get('input[analytics-name="login-password"]').should('be.visible');
        });
        return this;
    }

    goToRegistrationPage(){
        cy.origin(constants.BASE_SECURE_URL, { args: { url: constants.BASE_SECURE_URL } }, ({ url }) => {
             cy.visit(url);
            //Click on Register Link
            cy.get('a[analytics-name="login-register"]').should('be.visible').click();
        });
        return this;
    }   
}

export default new LoginPage();