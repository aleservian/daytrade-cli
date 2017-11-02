const chalk = require('chalk');
const log = console.log;
const urlDolar = require('./urls').dolar; 
const getData = require('./getData');

const dolar = ({daysRange, prevClose, open}) => {
  if(daysRange){
    getData(urlDolar)
    .then($ => {
      const result = $(".overviewDataTable .inlineblock:nth-child(3) .float_lang_base_2").text();
      log(chalk.bold.green(result));
    })
    return;
  }
  if(prevClose){
    getData(urlDolar)
    .then($ => {
      const result = $(".overviewDataTable .first:nth-child(1) .float_lang_base_2").text();
      log(chalk.bold.green(result));
    })
    return;
  }
  if(open){
    getData(urlDolar)
    .then($ => {
      const result = $(".overviewDataTable .inlineblock:nth-child(4) .float_lang_base_2").text();
      log(chalk.bold.green(result));
    })
    return;
  }
  getData(urlDolar)
    .then($ => {
      const result = $(".inlineblock .arial_26").text();
      log(chalk.bold.green(result));
    })
}

module.exports = dolar;