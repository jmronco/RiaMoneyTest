import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 10000,
  e2e: {
    experimentalRunAllSpecs : true,
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
