import chai from 'chai';
import lib from '../../library/common'

const assert = chai.assert;

/*
* Sample test for creating simple deck containing table view of queried data
*/

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
  const buttonBackToFilesystem = lib.returnButton('Back to File System');
  const buttonRunQuery = lib.returnButton('Run Query');
  const buttonPreviewTable = '//button/p[text()="Preview Table"]';
  const untitledWorkspace = '//div[@aria-label="Select Untitled Workspace.slam"]';
  const buttonRemoveDeck = lib.returnButton('Remove');
  const buttonConfirmDelete = '//button[text()="Delete"]';
  //Global variables end

  before(() => {
    lib.before();
    browser.waitForVisible(buttonSkipVideo);
    $(buttonSkipVideo).click();
  });

  it('DECK_001 - elements are visible', () => {
    lib.waitAndClick(linkTestDB, 1000);

    lib.waitAndClick(linkPatients, 1000);

    lib.waitAndClick(buttonSkipIntro, 1000);

    lib.waitAndClick(buttonFlipDeck, 1000);

    lib.waitAndClick(buttonSkipIntro, 1000);

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

    browser.pause(1000);
    $(buttonFlipDeck).click();
    browser.pause(1000);
    lib.waitAndClick(buttonNextCard);
    browser.pause(1000);
    lib.waitAndClick(buttonQueryCard);

    browser.pause(4000);
    for (let i = 0; i < 50; i++) {
      browser.keys('\uE003');
    }

    browser.keys('SELECT count(age), age FROM `/test/patients` GROUP BY age');

    browser.pause(1000);
    $(buttonRunQuery).click();
    browser.pause(1000);
    $(buttonNextCard).click();
    lib.waitAndClick(buttonPreviewTable, 1000);
    lib.waitAndClick(buttonBackToFilesystem, 6000);
    lib.waitAndClick(untitledWorkspace, 2000);
    lib.waitAndClick(buttonRemoveDeck, 2000);
    lib.waitAndClick(buttonConfirmDelete, 1000);
    browser.pause(3000);
  });
});
