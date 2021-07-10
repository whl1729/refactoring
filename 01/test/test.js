const fs = require('fs');
const assert = require('assert');
const { statement, htmlStatement } = require('../statement.js')

describe('statement', function() {
  it("the statement result should be corresponding to the result.json", function() {
    let jsonString = fs.readFileSync('./data/invoices.json')
    const invoices = JSON.parse(jsonString)

    jsonString = fs.readFileSync('./data/plays.json')
    const plays = JSON.parse(jsonString)

    jsonString = fs.readFileSync('./data/results.json')
    const results = JSON.parse(jsonString)

    for (const invoice of invoices) {
      let actualResult = statement(invoice, plays);
      let expectedResult = fs.readFileSync(results[invoice["customer"]]["statement"])
      assert.equal(actualResult, expectedResult);
    }
  });
});

