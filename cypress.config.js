import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 60000,
  e2e: {
    experimentalRunAllSpecs : true,
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
