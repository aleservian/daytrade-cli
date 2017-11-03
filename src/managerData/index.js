const chalk = require('chalk');
const log = console.log;
const getData = require('../getData');

class managerData {
  constructor(url){
    this.url = url;
  }
  getValue({daysRange, prevClose, open}){
    const {url} = this;
    if(daysRange){
      getData(url)
      .then($ => {
          const low = $(".overViewBox ul.bold li:nth-child(3) .inlineblock:first-child").text();
          const high = $(".overViewBox ul.bold li:nth-child(3) .inlineblock:last-child").text();
          log(`${chalk.bold.red(`🡇 ${low}`)} - ${chalk.bold.green(`🡅 ${high}`)}`);
        })
      return;
    }
    if(prevClose){
      getData(url)
        .then($ => {
          const result = $(".overviewDataTable .first:nth-child(1) .float_lang_base_2").text();
          log(chalk.bold.green(result));
        })
      return;
    }
    if(open){
      getData(url)
        .then($ => {
          const result = $(".overviewDataTable .inlineblock:nth-child(4) .float_lang_base_2").text();
          log(chalk.bold.green(result));
        })
      return;
    }
    getData(url)
      .then($ => {
        const value = $(".inlineblock .arial_26").text();
        const arrow = $("#quotes_summary_current_data .left").children('.top');
        const result = (arrow.hasClass('upArrow')) ? chalk.bold.green(`🡅 ${value}`) : 
                       (arrow.hasClass('downArrow')) ?  chalk.bold.red(`🡇 ${value}`) :
                       chalk.red.gray(`🡆 ${value}`);
        log(result);
      })
  }
}

module.exports = managerData;