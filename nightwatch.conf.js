var selenium = require('selenium-server-standalone-jar');
var phantom = require('phantomjs');

var config = {
  "src_folders": ["test"],
  "selenium": {
    "start_process": true,
    "server_path": selenium.path
  },
  "test_settings": {
    "default": {
      "globals": {
        "waitForConditionTimeout": 30000
      },
      "desiredCapabilities": {
        "browserName": "phantomjs",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "phantomjs.binary.path": phantom.path,
        "phantomjs.cli.args": []
      }
    }
  }
}

module.exports = config;
