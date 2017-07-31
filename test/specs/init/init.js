import chai from 'chai';
//import _ from 'lodash';
import lib from '../../library/common'

const assert = chai.assert;

describe('INIT tests', () => {
  //Global variables
  const toolButtons = '//button[@class="tool-item sd-tooltip"]';
  const buttonUpload = '//label[@class="tool-item sd-tooltip sd-tooltip-r"]';
  const buttonSkipVideo = '//button[text() = "Skip video"]';
  const inputField = '//input[@class="form-control"]';
  const homeLink = '//a[text()="Home"]';
  const nameHeader = '//a[text()="Name"]';
  const buttonMenuHidden = '//div[@title="Show header"]';
  const buttonMenuShown = '//div[@title="Hide header"]';
  const buttonHelp = '//button[text()="Help"]';
  const buttonSettings = '//button[text()="Settings"]';
  const buttonDismissSettings = '//button[text()="Dismiss Settings"]';
  const fieldSearch = '//input[@class="sd-form-input"]'
  const tabGroups = '//li[text()="Groups"]';
  //Global variables end

  before(() => {
    lib.before();
    browser.waitForVisible(buttonSkipVideo);
    $(buttonSkipVideo).click();
    //browser.url(browser.options.baseUrl);
  });

  it('INDEX_001 - elements are visible', () => {
    $$(toolButtons).forEach((buttonTool) => {
      assert.isTrue(buttonTool.isVisible());
    });

    assert.isTrue($(buttonUpload).isVisible());
    assert.isTrue($(inputField).isVisible());
    assert.isTrue($(homeLink).isVisible());
    assert.isTrue($(nameHeader).isVisible());
    assert.isTrue($(buttonMenuHidden).isVisible());
  });

  it('INDEX_002 - menu works', () => {
    browser.waitForVisible(buttonMenuHidden);

    // Show menu with buttons
    $(buttonMenuHidden).click();

    assert.isTrue($(buttonHelp).isVisible());
    assert.isTrue($(buttonSettings).isVisible());
    assert.isTrue($(buttonMenuShown).isVisible());

    // Hide menu with buttons
    $(buttonMenuShown).click();

    // Wait for animation
    browser.waitUntil(() => {
      return !($(buttonHelp).isVisibleWithinViewport());
    });

    assert.isTrue(!($(buttonHelp).isVisibleWithinViewport()));
    assert.isTrue(!($(buttonSettings).isVisibleWithinViewport()));
  });

  it('INDEX_003 - settings button works', () => {
    browser.waitForVisible(buttonMenuHidden);

    // Show menu with buttons
    $(buttonMenuHidden).click();

    browser.waitUntil(() => {
      return $(buttonSettings).isVisibleWithinViewport();
    });

    // solves timing issue
    browser.pause(100);
    $(buttonSettings).click();

    browser.waitUntil(() => {
      return $(buttonDismissSettings).isVisible();
    })

    assert.isTrue($(buttonDismissSettings).isVisible());
    assert.isTrue($(fieldSearch).isVisible());
    assert.isTrue($(tabGroups).isVisible());

    $(buttonDismissSettings).click();
  });
});
