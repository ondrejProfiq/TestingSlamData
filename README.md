# SlamData Tests
## Prerequisites
* have running instance of SlamData
* install standalone selenium server `npm install selenium-standalone@latest -g`
* `selenium-standalone install`
* `npm install`

## Run tests locally
* Start selenium server - `selenium-standalone start`
* `npm run test` to run ALL tests

## Possible settings
* Speed up test - Change maxInstance in `wdio.conf.js`. **Be careful - it can eat all of your RAM**
```
    capabilities: [{
        maxInstances: 2,
        //
        browserName: 'chrome'
    }],
```
* Change browser / add browser

## Links
* http://webdriver.io/
