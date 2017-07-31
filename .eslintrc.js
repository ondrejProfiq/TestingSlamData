module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import",
        "webdriverio"
    ],
    "env": {
        "mocha": true,
        "node": true,
        "es6": true,
        "webdriverio/wdio": true,
    },
    "rules": {
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        'import/no-unresolved': 2,
        'no-underscore-dangle': ["error", { "allowAfterThis": true }],
        'object-shorthand': [2, "consistent"],
        'class-methods-use-this': 0,
        'import/no-named-as-default': 0
    }
};