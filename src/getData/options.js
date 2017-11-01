const cheerio = require('cheerio');

module.exports = {
  method: 'GET',
  url: '',
  headers: {
    'User-Agent': 'request'
  },
  transform: function (body) {
      return cheerio.load(body);
  }
}