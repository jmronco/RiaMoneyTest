import calculatorForm from "../support/pages/calculatorForm";
import homePage from "../support/pages/homePage";
import constants from "../support/constants";

describe('Validate Below Minimum Amount', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC012 - Below Minimum Amount', () => {
        //Enter below minimum value
        calculatorForm.typeInvalidAmountFrom(constants.AMOUNT_FROM_BELOW_MIN);
        calculatorForm.showMinimumAmountErrorMessage();
    });
});