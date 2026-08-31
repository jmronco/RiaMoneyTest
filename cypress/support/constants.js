import genericMethods from "./genericMethods";

class Constants {
    //Environment Configurations
    get BASE_URL() 
    { return 'https://www.riamoneytransfer.com';}
    get BASE_SECURE_URL()
    { return 'https://secure.riamoneytransfer.com';}
    get PAGE_TITLE()
    { return 'Ria Money Transfer';}
    //Test Data
    get COUNTRY_REGION()
    { return 'Chile';}
    get COUNTRY_INITIALS()
    { return 'cl';}
    get AMOUNT_FROM()
    { return '25000';}
    get AMOUNT_FROM_2()
    { return '50000';}
    get AMOUNT_FROM_ALPHACHARS()
    { return genericMethods.getRandomAlphabetCharacters(10);}
    get AMOUNT_FROM_SPECIALCHARS()
    { return genericMethods.getRandomSpecialCharacters(10);}
    get AMOUNT_FROM_EMPTY()
    { return ' ';}
    get AMOUNT_FROM_NEGATIVE()
    { return '-50000';}
    get AMOUNT_FROM_MIN()
    { return '1';}
    get AMOUNT_FROM_MAX()
    { return '10000000';}
    get AMOUNT_FROM_BELOW_MIN()
    { return '0,001';}
    get AMOUNT_FROM_ABOVE_MAX()
    { return '100000000';}
    get COUNTRY_DESTINY_1()
    { return 'Haití';}
    get COUNTRY_DESTINY_2()
    { return 'Zimbabue';}
    get COUNTRY_FROM_CURRENCY_1()
    { return 'CLP';}
    get COUNTRY_CURRENCY_1()
    { return 'HTG';}
    get COUNTRY_CURRENCY_2()
    { return 'USD';}
}

export default new Constants();
