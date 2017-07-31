import _ from 'lodash';

/**
 * Common library for our functions
 * @constructor
 */
class Lib {

  static random(length = 7, possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890') {
    let text = '';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  /**
   * It returns parent of given innerText
   * @param array - array of possible parents for example $$('div.parent')
   * @param text
   * @returns {Object} - return {} if parent is not present or webdriverIO object $()
   */
  static selectParentByText(array, text) {
    let foundedItem = {};
    _.forEach(array, (item) => {
      if (item.getAttribute('innerText').includes(text)) {
        foundedItem = item;
      }
    });
    return foundedItem;
  }

  static before() {
    browser.url(browser.options.baseUrl);
  }
}

export default Lib;
