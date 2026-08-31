import calculatorForm from "../support/pages/calculatorForm";
import homePage from "../support/pages/homePage";
import constants from "../support/constants";

describe('Validate Minimum Amount', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC010 - Minimum Amount', () => {
        //Enter minimum value
        calculatorForm.typeAmountFrom(constants.AMOUNT_FROM_MIN);
        calculatorForm.dontShowMinimumAmountErrorMessage();
    });
});