const request = require('request-promise');
const chalk = require('chalk');
const options = require('./options');
const spinner = require('./spinner');
const log = console.log;

const getData = (url='') => {
  const optionsRequest = Object.assign({},options,{url});
  spinner.start();
  return request(optionsRequest)
    .finally(()=>{
      spinner.stop();
    })
    .catch(error => {
      log(chalk.bold.red(error.statusCode))
    })
}

module.exports = getData;