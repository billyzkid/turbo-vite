// module.exports = {
//   env: {
//     node: true,
//   },
//   parser: "@typescript-eslint/parser",
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "prettier",
//   ],
//   plugins: ["@typescript-eslint"],
//   parserOptions: {
//     sourceType: "module",
//     ecmaVersion: 2020,
//   },
//   rules: {
//     "@typescript-eslint/no-non-null-assertion": "off",
//   },
// };

// const javascriptPlugin = require("@eslint/js");
// const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
// const typescriptParser = require("@typescript-eslint/parser");
// const prettierConfig = require("eslint-config-prettier");
// const prettierPlugin = require("eslint-plugin-prettier");
// const globals = require("globals");

// console.log(javascriptPlugin);

// const javascriptFlatConfig = {
//   files: ["**/*.{js,ts}"],
//   languageOptions: {
//     globals: {
//       ...globals.browser,
//       ...globals.node,
//       ...globals.es2021
//     }
//   },
//   rules: {
//     ...javascriptPlugin.configs["recommended"].rules
//   }
// };

// const typescriptFlatConfig = {
//   files: ["**/*.ts"],
//   plugins: {
//     "@typescript-eslint": typescriptPlugin
//   },
//   languageOptions: {
//     parser: typescriptParser,
//     parserOptions: {
//       project: true
//     }
//   },
//   rules: {
//     ...typescriptPlugin.configs["eslint-recommended"].rules,
//     ...typescriptPlugin.configs["recommended"].rules,
//     ...typescriptPlugin.configs["recommended-requiring-type-checking"].rules
//   }
// };

// const prettierFlatConfig = {
//   plugins: {
//     prettier: prettierPlugin
//   },
//   rules: {
//     ...prettierConfig.rules,
//     ...prettierPlugin.configs["recommended"].rules
//   }
// };

module.exports = [
  // {
  //   ignores: ["**/dist/"]
  // },
  // javascriptFlatConfig,
  // typescriptFlatConfig,
  // prettierFlatConfig
];

