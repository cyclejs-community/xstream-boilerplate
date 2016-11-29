module.exports = {
  'src_folders': ['e2e'],
  'output_folder': './report',
  'custom_commands_path': '',
  'custom_assertions_path': '',
  'page_objects_path': '',
  'globals_path': '',

  'selenium': {
    'start_process': true,
    'server_path': 'node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.0.jar',
    'log_path': '',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
      'webdriver.ie.driver': ''
    }
  },

  'test_runner': {
    'type': 'mocha'
  },

  'test_settings': {
    'default': {
      'launch_url': 'http://localhost:8080',
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'output_folder': './report',
      'screenshots': {
        'enabled': true,
        'path': './screens',
        'on_failure': true,
        'on_error': true
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },

    'travis': {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
