import calculatorForm from "../support/pages/calculatorForm";
import homePage from "../support/pages/homePage";
import constants from "../support/constants";

describe('Validate Amount Alphabet Characters', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC006 - Amount Alphabet Characters', () => {
        //Enter alphabet characters. Doesn't show any error message
        calculatorForm.typeAlphaCharsAmount(constants.AMOUNT_FROM_ALPHACHARS);
        calculatorForm.validateAmountFromInputNoneAlphaCharsValues();
        calculatorForm.showEnterValidAmountErrorMessage();
    });
});