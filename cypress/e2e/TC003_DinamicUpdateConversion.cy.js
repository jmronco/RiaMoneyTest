import homePage from "../support/pages/homePage";
import constants from "../support/constants";
import calculatorForm from "../support/pages/calculatorForm";

describe('Validate Dinamic Update Conversion', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC003 - Dinamic Update Conversion', () => {
        calculatorForm.typeAmountFrom(constants.AMOUNT_FROM);
        calculatorForm.checkTotalAmountToPayUpdated(constants.COUNTRY_FROM_CURRENCY_1, constants.AMOUNT_FROM);
        calculatorForm.typeAmountFrom(constants.AMOUNT_FROM_2);
        calculatorForm.checkTotalAmountToPayUpdated(constants.COUNTRY_FROM_CURRENCY_1, constants.AMOUNT_FROM_2);
    });
}); 