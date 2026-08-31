import calculatorForm from "../support/pages/calculatorForm";
import homePage from "../support/pages/homePage";
import constants from "../support/constants";

describe('Validate Empty Amount', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC008 - Empty Amount', () => {
        //Left the filed empty. Doesn't show any error message. 
        //Let me follow with the empty field to the next page
        calculatorForm.typeInvalidAmountFrom(constants.AMOUNT_FROM_EMPTY);
        //The Start Your Transfer Button is still enabled
        calculatorForm.validateDisabledStateButtonStartYourTransfer();
        //Check if click Start Your Transfer. Button works
        calculatorForm.pressButtonStartYourTransfer();
    });
});