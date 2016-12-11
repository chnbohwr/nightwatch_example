var selenium = require('selenium-server-standalone-jar');
var chromeDriver = require('chrome-driver-standalone');

var config = {
  "custom_commands_path": "command",
  "src_folders": ["test"],
  "selenium": {
    "start_process": true,
    "server_path": selenium.path,
    "cli_args": {
      "webdriver.chrome.driver": chromeDriver.path
    }
  },
  "test_settings": {
    "default": {
      "globals": {
        "waitForConditionTimeout": 30000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
      }
    }
  }
}

module.exports = config;
