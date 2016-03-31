/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'angularfire2/**/*.js',
      'firebase/lib/*.js',
      'materialize-css/dist/font/**/*',
      'materialize-css/dist/css/*.min.css'
    ]
  });
  return app.toTree();
};
