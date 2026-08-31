import calculatorForm from "../support/pages/calculatorForm";
import homePage from "../support/pages/homePage";
import constants from "../support/constants";

describe('Validate Negative Amount', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC009 - Negative Amount', () => {
        //Enter negative amount
        calculatorForm.typeInvalidAmountFrom(constants.AMOUNT_FROM_NEGATIVE);
        //Ok, doesn't allow/enter negative symbols
        calculatorForm.validateAmountFromInputNegativeValue();
    });
});