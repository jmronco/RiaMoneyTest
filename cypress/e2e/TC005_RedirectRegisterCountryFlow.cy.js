import calculatorForm from '../support/pages/calculatorForm';
import homePage from '../support/pages/homePage';
import loginPage from '../support/pages/loginPage';
import registrationPage from '../support/pages/registrationPage';
import constants from '../support/constants';

describe('Validate Redirect to Register Country Flow', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC005 - Redirect to Register Country Flow', () => {
        calculatorForm.pressButtonStartYourTransfer();
        loginPage.acceptCookies();
        loginPage.goToRegistrationPage();
        registrationPage.validatePageElements();
    });
});