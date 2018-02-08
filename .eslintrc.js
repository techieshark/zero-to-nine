module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:flowtype/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    // see: "https://stackoverflow.com/questions/36327096/vscode-linter-es6-es7-babel-linter#36327097"
  },
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "flowtype/define-flow-type": 1
  },
  "globals": {
  }
}