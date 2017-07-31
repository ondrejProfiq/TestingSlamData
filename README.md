# Voyager
## Prerequisites
* install standalone selenium server `npm install selenium-standalone@latest -g`
* `selenium-standalone install`
* `npm install`

## Run tests locally
* Start selenium server - `selenium-standalone start`
* `npm run sanity` to run SANITY tests
* `npm run test` to run ALL tests

## SauceLabs
* `export SAUCE_USERNAME=your_user`
* `export SAUCE_ACCESS_KEY=your_key`
* `npm run saucelabs` to run ALL tests


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

## Hints
* `npm test -- --suite navigation` - you can run only navigation specs, same for `npm run sanity`