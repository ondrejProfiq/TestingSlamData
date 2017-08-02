import chai from 'chai';
import lib from '../../library/common'

const assert = chai.assert;

describe('DECK tests', () => {
  //Global variables
  const buttonSkipVideo = '//button[text() = "Skip video"]';
  const linkTestDB = '//a[text()="test"]';
  const linkPatients = '//a[text()="patients"]';
  const buttonFlipDeck = lib.returnButton('Flip deck');
  const buttonSkipIntro = '//button[text()="Skip"]';
  const buttonDeleteCard = lib.returnButton('Delete card');
  const buttonRenameDeck = lib.returnButton('Rename deck');
  const buttonShareDeck = lib.returnButton('Share deck');
  const buttonUnshareDeck = lib.returnButton('Unshare deck');
  const buttonEmbedDeck = lib.returnButton('Embed deck');
  const buttonPublishDeck = lib.returnButton('Publish deck');
  const buttonDeleteDeck = lib.returnButton('Delete deck');
  const buttonMirror = lib.returnButton('Mirror');
  const buttonWrap = lib.returnButton('Wrap');
  const buttonCollapse = lib.returnButton('Collapse');
  const buttonNextCard = lib.returnButton('Access next card');
  const buttonQueryCard = lib.returnButton('Insert a Query card');
  //const textarea = '//div[@class="ace_layer ace_text-layer"]';
  const buttonRunQuery = lib.returnButton('Run Query');
  const buttonPreviewTable = '//button/p[text()="Preview Table"]';
  //const paginationButtons = '//div[@class="sd-pagination sd-form"]';
  //const headerAge = '//th[text()="age"]';
  //Global variables end

  before(() => {
    lib.before();
    browser.waitForVisible(buttonSkipVideo);
    $(buttonSkipVideo).click();
  });

  it('DECK_001 - elements are visible', () => {
    browser.waitUntil(() => {
      return $(linkTestDB).isVisibleWithinViewport();
    });

    $(linkTestDB).click();

    browser.waitUntil(() => {
      return $(linkPatients).isVisibleWithinViewport();
    });

    $(linkPatients).click();

    browser.waitUntil(() => {
      return $(buttonSkipIntro).isVisible();
    });
    $(buttonSkipIntro).click();

    browser.waitUntil(() => {
      return $(buttonFlipDeck).isVisible();
    });
    $(buttonFlipDeck).click();

    browser.waitUntil(() => {
      return $(buttonSkipIntro).isVisible();
    });
    $(buttonSkipIntro).click();

    assert.isTrue($(buttonDeleteCard).isVisible());
    assert.isTrue($(buttonRenameDeck).isVisible());
    assert.isTrue($(buttonShareDeck).isVisible());
    assert.isTrue($(buttonUnshareDeck).isVisible());
    assert.isTrue($(buttonEmbedDeck).isVisible());
    assert.isTrue($(buttonPublishDeck).isVisible());
    assert.isTrue($(buttonDeleteDeck).isVisible());
    assert.isTrue($(buttonMirror).isVisible());
    assert.isTrue($(buttonWrap).isVisible());
    assert.isTrue($(buttonCollapse).isVisible());

    $(buttonFlipDeck).click();
    browser.waitUntil(() => {
      return $(buttonNextCard).isVisible();
    });
    $(buttonNextCard).click();

    browser.waitUntil(() => {
      return $(buttonQueryCard).isVisible();
    })
    $(buttonQueryCard).click();

    for (let i = 0; i < 50; i++) {
      browser.keys('\uE003');
    }
    browser.keys('SELECT count(age), age FROM `/test/patients` GROUP BY age');
    $(buttonRunQuery).click();
    $(buttonNextCard).click();
    browser.waitUntil(() => {
      return $(buttonPreviewTable).isVisible();
    })
    $(buttonPreviewTable).click();
  });
});
