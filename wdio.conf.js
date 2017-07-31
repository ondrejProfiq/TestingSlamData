/* eslint-disable */
require('babel-register');
var merge = require('deepmerge');
var base = require('./wdio.conf.basic.js');

// http://webdriver.io/guide/testrunner/organizesuite.html
var isSauceLabs = process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY;
var sauceLabsconfig = {
  host: 'ondemand.saucelabs.com',
  port: 80,
  services: ['sauce'],
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: true,
  maxInstances: 8,
  capabilities: [{
    maxInstances: 8,
    //
    browserName: 'chrome',
    version: 'latest',
    platform: 'Linux',
    seleniumVersion: '3.3.1'
  }],
}


if(isSauceLabs){
  exports.config = merge(base.config, sauceLabsconfig);
  exports.config.reporters = ['dot', 'junit'];
} else {
  exports.config = merge(base.config, {});
}
