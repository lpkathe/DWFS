const moment = require('moment');
const today = new Date();
const challenge = moment(today).format('MMMM Do YYYY, h:mm:ss a');
console.log(challenge);