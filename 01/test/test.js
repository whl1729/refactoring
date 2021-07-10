const fs = require('fs');
const assert = require('assert');
const { statement, htmlStatement } = require('../statement.js')

function parseJsonFile(path) {
  return JSON.parse(fs.readFileSync(path));
}

function createTestData() {
  const result = {};
  result.invoices = parseJsonFile('./data/invoices.json');
  result.plays = parseJsonFile('./data/plays.json');
  result.results = parseJsonFile('./data/results.json');
  return result;
}

describe('statement', function() {
  it("the statement result should match the result.json", function() {
    const data = createTestData();

    for (const invoice of data.invoices) {
      let actualResult = statement(invoice, data.plays);
      let expectedPath = data.results[invoice["customer"]]["statement"]
      let expectedResult = fs.readFileSync(expectedPath)
      assert.equal(actualResult, expectedResult);
    }
  });
});

