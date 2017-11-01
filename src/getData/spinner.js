const ora = require('ora');

const spinner = ora({
  color: 'green',
  text: 'Loading...',
  spinner: {
    interval: 100,
		frames: [
			"☱",
			"☲",
			"☴"
		]
  }
});

module.exports = spinner