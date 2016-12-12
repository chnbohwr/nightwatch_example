var selenium = require('selenium-server-standalone-jar');
var chromeDriver = require('chrome-driver-standalone');
var geckoDriver = require('geckodriver');
var phantom = require('phantomjs-prebuilt');

var config = {
  "custom_commands_path": "command",
  "page_objects_path": "page",
  "src_folders": ["test"],
  "selenium": {
    "start_process": true,
    "server_path": selenium.path,
    "cli_args": {
      "webdriver.chrome.driver": chromeDriver.path,
      "webdriver.gecko.driver": geckoDriver.path
    }
  },
  "test_settings": {
    "default": {
      "globals": {
        "waitForConditionTimeout": 30000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
      },
      "screenshots": {
          "enabled": true,
          "on_failure": true,
          "on_error": false,
          "path": "screenshots"
      }
    },
    "phantom": {
        "desiredCapabilities" : {
            "browserName" : "phantomjs",
            "javascriptEnabled" : true,
            "acceptSslCerts" : true,
            "phantomjs.binary.path" : phantom.path,
            "phantomjs.cli.args" : []
        }
    },
    "firefox": {
        "desiredCapabilities": {
            browserName: 'firefox'
        }
    }
  }
}

module.exports = config;
