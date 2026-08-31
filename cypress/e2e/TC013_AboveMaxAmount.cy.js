import calculatorForm from "../support/pages/calculatorForm";
import homePage from "../support/pages/homePage";
import constants from "../support/constants";

describe('Validate Above Maximum Amount', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC013 - Above Maximum Amount', () => {
        //Enter above maximum value
        calculatorForm.typeInvalidAmountFrom(constants.AMOUNT_FROM_ABOVE_MAX);
        calculatorForm.showMaximunAmountErrorMessage();
    });
});