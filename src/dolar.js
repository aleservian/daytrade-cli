const chalk = require('chalk');
const log = console.log;
const urlDolar = require('./urls').dolar; 
const getData = require('./getData');

const dolar = () => {
  getData(urlDolar)
    .then($ => {
      const result = $(".inlineblock .arial_26").text();
      log(chalk.bold.green(result));
    })
}

module.exports = dolar;