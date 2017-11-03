const {miniBovespa} = require('../urls');
const managerData = require('../managerData');

module.exports = ({daysRange, prevClose, open}) => {
  const mananger = new managerData(miniBovespa);
  const options = {daysRange, prevClose, open};
  
  return mananger.getValue(options);
}