import calculatorForm from "../support/pages/calculatorForm";
import homePage from "../support/pages/homePage";
import constants from "../support/constants";

describe('Validate Amount Special Characters', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC007 - Amount Special Characters', () => {
        //Enter special characters. Doesn't show any error message
        calculatorForm.typeSpecialCharsAmount(constants.AMOUNT_FROM_SPECIALCHARS);
        calculatorForm.validateAmountFromInputCommaDots();
        calculatorForm.showEnterValidAmountErrorMessage();
    });
});