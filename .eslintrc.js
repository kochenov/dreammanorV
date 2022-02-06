module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "linebreak-style": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "vue/valid-v-model": "error",
    "vue/valid-v-on": "error",
    "vue/valid-v-once": "error",
    "vue/valid-v-pre": "error",
    "vue/valid-v-show": "error",
    "vue/valid-v-slot": "error",
    "vue/valid-v-text": "error",
    "vue/valid-next-tick": "error",
    "vue/valid-template-root": "error",
    "vue/valid-v-bind-sync": "error",
    "vue/valid-v-bind": "error",
    "vue/valid-v-cloak": "error",
    "vue/valid-v-else-if": "error",
    "vue/valid-v-else": "error",
    "vue/valid-v-for": "error",
    "vue/valid-v-html": "error",
    "vue/valid-v-if": "error",
    "vue/valid-v-is": "error",
    "vue/valid-v-memo": "error",
  },

  extends: [
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "@vue/prettier",
  ],
};
