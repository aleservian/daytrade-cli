const {dolar} = require('../urls');
const managerData = require('../managerData');

module.exports = ({daysRange, prevClose, open}) => {
  const mananger = new managerData(dolar);
  const options = {daysRange, prevClose, open};
  
  return mananger.getValue(options);
}