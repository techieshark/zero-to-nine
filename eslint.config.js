import { defineConfig } from "eslint/config";
import hermesESLintParser from 'hermes-eslint';
import pluginFtFlow from 'eslint-plugin-ft-flow';

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: { 'ft-flow': pluginFtFlow },
    rules: pluginFtFlow.configs.recommended.rules,
    languageOptions: { parser: hermesESLintParser, },
  },
]);