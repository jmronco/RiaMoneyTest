class GenericMethods {
    cypressRunnerErrorHandler() {
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        });
    }
    
    getRandomAlphabetCharacters(length){
        const alplhaCharacters = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        const randomValues = new Uint32Array(length);
        (window.crypto || globalThis.crypto).getRandomValues(randomValues);
        let result = '';
        for (let i = 0; i < length; i++) {
            result += alplhaCharacters[randomValues[i] % alplhaCharacters.length];
        }
        return result;
    }

    getRandomSpecialCharacters(length){
        const specialchars = "!@#$%^&*()_+-=[]{}|;':\",./<>?¿¡ñáéíóúÜ";
        const randomValues = new Uint32Array(length);
        (window.crypto || globalThis.crypto).getRandomValues(randomValues);        
        let result = "";
        for (let i = 0; i < length; i++) {
            result += specialchars[randomValues[i] % specialchars.length];
        }
        return result;
    }
}

export default new GenericMethods();