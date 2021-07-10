const fs = require('fs');
const { statement, htmlStatement } = require('./statement.js');

function main() {
  let jsonString = fs.readFileSync('./data/invoices.json');
  const invoices = JSON.parse(jsonString);

  jsonString = fs.readFileSync('./data/plays.json');
  const plays = JSON.parse(jsonString);

  for (const invoice of invoices) {
    let result = statement(invoice, plays);
    console.log(result);

    result = htmlStatement(invoice, plays);
    console.log(result);
  }
}

main();
