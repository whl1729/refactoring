const fs = require('fs');
const assert = require('assert');
const { statement, htmlStatement } = require('../statement.js')

describe('statement', function() {
  it("the statement result should be corresponding to the result.json", function() {
    let jsonString = fs.readFileSync('./data/invoices.json')
    const invoices = JSON.parse(jsonString)

    jsonString = fs.readFileSync('./data/plays.json')
    const plays = JSON.parse(jsonString)

    jsonString = fs.readFileSync('./data/result.json')
    const standard = JSON.parse(jsonString)

    for (const invoice of invoices) {
      let result = statement(invoice, plays);
      assert.equal(result, standard[invoice["customer"]])
    }
  });
});

