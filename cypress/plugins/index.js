/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
//   allureWriter(on, config);
//   return config;
// }

// const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
// module.exports = (on, config) => {
//   on('task', { downloadFile })
// }



// const xlsx = require('node-xlsx').default;
// const fs = require('fs'); // for file
// const path = require('path'); // for file path
// module.exports = (on, config) => {
//   // require('cypress-grep/src/plugin')(config)

//   on('task', {
//     parseXlsx({ filePath }) {
//       return new Promise((resolve, reject) => {
//         try {
//           const jsonData = xlsx.parse(fs.readFileSync(filePath));
//           resolve(jsonData);
//         } catch (e) {
//           reject(e);
//         }
//       });
//     }
//   });
// } 