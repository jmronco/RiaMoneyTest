import calculatorForm from "../support/pages/calculatorForm";
import homePage from "../support/pages/homePage";
import constants from "../support/constants";

describe('Validate Select Country Option', () => {
    beforeEach(() => {
        homePage.navegate();
        homePage.changeRegion(constants.COUNTRY_REGION, constants.COUNTRY_INITIALS);
    });
    it('TC002 - Select Country Send To', () => {
        calculatorForm.selectCountryDestination(constants.COUNTRY_DESTINY_2, constants.COUNTRY_CURRENCY_2);
    });
});