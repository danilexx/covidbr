module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react", "prettier"],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "prettier/prettier": "error",
    "import/extensions": "off",
    "react/jsx-filename-extension": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/prefer-default-export": "off",
    "react/jsx-one-expression-per-line": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-duplicates": "off",
    "import/no-cycle": "off",
    "import/order": "off",
    "import/no-self-import": "off",
    "react/jsx-props-no-spreading": "off",
    "import/named": "off",
    "react/no-array-index-key": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-nested-ternary": "off"
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["src", "./src"]],
        extensions: [".ts", ".tsx"]
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
