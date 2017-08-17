/* eslint-disable */
exports.config = {
  host: '0.0.0.0',
  port: 4444,
  specs: [
    './test/specs/**/*.js'
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],
  sync: true,
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'silent',

  coloredLogs: true,
  bail: 0,
  baseUrl: 'http://localhost:20223/',
  // Default timeout for all waitFor* commands.
  waitforTimeout: 20000,
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  //
  // Initialize the browser instance with a WebdriverIO plugin. The object should have the
  // plugin name as key and the desired plugin options as properties. Make sure you have
  // the plugin installed before running any tests. The following plugins are currently
  // available:
  // WebdriverCSS: https://github.com/webdriverio/webdrivercss
  // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
  // Browserevent: https://github.com/webdriverio/browserevent
  // plugins: {
  //     webdrivercss: {
  //         screenshotRoot: 'visual/my-shots',
  //         failedComparisonsRoot: 'visual/diffs',
  //         misMatchTolerance: 0.05,
  //         screenWidth: [320,480,640,1024]
  //     },
  // webdriverrtc: {},
  // browserevent: {}
  // },
  framework: 'mocha',
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  reporters: ['spec', 'junit'],
  reporterOptions: {
    junit: {
      outputDir: './'
    }
  },
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-register'],
    timeout: 900000,
    //grep: 'DECK_001',
  },
  // Gets executed once before all workers get launched.
  // onPrepare: function (config, capabilities) {
  // },
  // Gets executed just before initialising the webdriver session and test framework. It allows you
  // to manipulate configurations depending on the capability or spec.
  // beforeSession: function (config, capabilities, specs) {
  // },
  before: function (capabilities, specs) {
    browser.windowHandleSize({width: 1024, height: 800});
  },
  //
  // Hook that gets executed before the suite starts
  // beforeSuite: function (suite) {
  // },
  //
  // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
  // before in Mocha)
  // beforeHook: function () {
  // },
  //
  // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
  // afterEach in Mocha)
  // afterHook: function () {
  // },
  //
  // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  // beforeTest: function (test) {
  // },
  //
  // Runs before a WebdriverIO command gets executed.
  // beforeCommand: function (commandName, args) {
  // },
  //
  // Runs after a WebdriverIO command gets executed
  // afterCommand: function (commandName, args, result, error) {
  // },
  //
  // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  // afterTest: function (test) {
  // },
  //
  // Hook that gets executed after the suite has ended
  // afterSuite: function (suite) {
  // },
  //
  // Gets executed after all tests are done. You still have access to all global variables from
  // the test.
  // after: function (result, capabilities, specs) {
  // },
  //
  // Gets executed right after terminating the webdriver session.
  // afterSession: function (config, capabilities, specs) {
  // },
  //
  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  // onComplete: function(exitCode) {
  // }
}
