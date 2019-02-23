module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true
  },
  "rules": {
    "import/no-unresolved": "off",
     "jsx-a11y/anchor-has-content": [ 0, {
            "components": [ "Anchor" ],
          }],
    "no-unused-vars": 1,
    "no-return-assign": 0,
    "no-unused-expressions": [
      1,
      {
        "allowTaggedTemplates": true,
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "arrow-body-style": [2, "as-needed"],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-console": 0,
    "linebreak-style": 0,
    "no-use-before-define": 0,
    "import/no-extraneous-dependencies": 0,
    "react/no-danger": 0,
    "import/prefer-default-export": 0,
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "react/display-name": 1,
    "react/react-in-jsx-scope": 0,
    "react/no-unescaped-entities": 0,
    "jsx-a11y/accessible-emoji": 0,
    "react/forbid-prop-types": 0,
    "prefer-template": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "indent": 0,
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true,
        "printWidth": 80
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": ["invalidHref"]
      }
    ]
  },
  "plugins": ["prettier"]

}
