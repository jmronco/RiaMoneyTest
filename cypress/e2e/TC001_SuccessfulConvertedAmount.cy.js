import calculatorForm from "../support/pages/calculatorForm";
import homePage from "../support/pages/homePage";
import constants from "../support/constants";

describe('Validate Successful Converted Amount', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC001 - Successful Converted Amount', () => {
        calculatorForm.typeAmountFrom(constants.AMOUNT_FROM);
        calculatorForm.selectCountryDestination(constants.COUNTRY_DESTINY_1, constants.COUNTRY_CURRENCY_1);
        calculatorForm.checkTotalAmountToPay(constants.COUNTRY_FROM_CURRENCY_1, constants.AMOUNT_FROM);
        
    });
});