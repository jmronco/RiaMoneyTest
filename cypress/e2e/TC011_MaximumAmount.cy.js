import calculatorForm from "../support/pages/calculatorForm";
import homePage from "../support/pages/homePage";
import constants from "../support/constants";

describe('Validate Maximum Amount', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC011 - Maximum Amount', () => {
        //Enter maximum value
        calculatorForm.typeAmountFrom(constants.AMOUNT_FROM_MAX);
        calculatorForm.dontShowMaximunAmountErrorMessage();
    });
});