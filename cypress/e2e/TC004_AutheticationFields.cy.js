import calculatorForm from '../support/pages/calculatorForm';
import homePage from '../support/pages/homePage';
import loginPage from '../support/pages/loginPage';
import constants from '../support/constants';

describe('Validation of Authentication Fields', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC004 Authentication Fields', () => {
        calculatorForm.pressButtonStartYourTransfer();
        loginPage.acceptCookies();
        loginPage.validatePageElements();
    });
});