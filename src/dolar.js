const request = require('request');
const options = {
  method: 'GET',
  url: 'https://br.investing.com/currencies/usd-brl',
  headers: {
    'User-Agent': 'request'
  }
}
const get = (error, response, body) => {
  console.log(response.statusCode)
}

const dolar = () => {
  request(options, get);
  // request
  //   .get('https://br.investing.com/currencies/usd-brl',
  //   {headers: {
  //     'User-Agent': 'request'
  //   }})
  //     .on('response',(response) => {
  //       console.log(response.statusCode)
  //     })
  //     .on('error', function(err) {
  //       console.log(err)
  //     })
}

module.exports = dolar;