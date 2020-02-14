const moment = require("moment");

const formatDate = date => moment(date).fromNow();
const formatPull = pull =>
  `${pull.user.login} | ${pull.title} | ${formatDate(pull.created_at)} | ${
    pull.html_url
  }`;

module.exports = { formatDate, formatPull };