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
  },

  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
};
