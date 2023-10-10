const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');
const path = require('path');

describe('Parents', () => {
  const htmlStr = fs.readFileSync(
    path.resolve(__dirname, '../index.html'),
    'utf8'
  );
  const dom = new JSDOM(htmlStr);
  global.window = dom.window;
  global.document = window.document;
  global.console.log = jest.fn();

  require('../index');

  it('Should print all parents of element `cite`', () => {
    // get all parents of the element `cite`
    const parentsList = [];
    let currentElement = dom.window.document.querySelector('cite');
    let currentElementName = currentElement.nodeName;
    parentsList.unshift(currentElementName.toLowerCase());
    currentElement = currentElement.parentElement;
    while (currentElement) {
      let currentElementName = currentElement.nodeName;
      parentsList.unshift(currentElementName.toLowerCase());
      currentElement = currentElement.parentElement;
    }
    // print to the console as a string
    expect(console.log).toHaveBeenCalledWith(
      expect.stringMatching(
        new RegExp(`(${parentsList.join(').*>.*(')})`, 'igm')
      )
    );
  });
});
