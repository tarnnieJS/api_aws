const users = require('./users/users.service.js');
const lists = require('./lists/lists.service.js');
const profiles = require('./profiles/profiles.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(lists);
  app.configure(profiles);
};
