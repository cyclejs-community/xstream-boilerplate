const CBT_USERNAME = process.env.CBT_USERNAME
const CBT_PASSWORD = process.env.CBT_PASSWORD
const START_PROCESS = process.env.E2E !== 'CBT'

const makeCBTTest = OSName => (apiName, browserName) =>
  ({
    'selenium_host': 'hub.crossbrowsertesting.com',
    'selenium_port': '80',
    'output_folder': '${CIRCLE_ARTIFACTS}',

    desiredCapabilities: {
      'name': `${OSName}~${apiName}~${browserName}`,
      'browser_api_name': apiName,
      'os_api_name': OSName,
      'browserName': browserName.toLowerCase(),
      'record_video': 'true',
      'record_network': 'true',
      'username': CBT_USERNAME,
      'password': CBT_PASSWORD,
      'access_key': CBT_PASSWORD
    }
  })

const makeWin8 = makeCBTTest('Win8.1')
const makeWin10 = makeCBTTest('Win10')
const makeMac = (n, api) => makeCBTTest(`Mac10.${n}`)(api, 'safari')

module.exports = {
  'src_folders': ['e2e'],
  'output_folder': './report',
  'custom_commands_path': '',
  'custom_assertions_path': '',
  'page_objects_path': '',
  'globals_path': '',

  'selenium': {
    'start_process': START_PROCESS,
    'server_path': 'node_modules/selenium-server/lib/runner/selenium-server-standalone-2.53.0.jar',
    'log_path': '',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
      'webdriver.ie.driver': ''
    }
  },

  'test_runner': {
    'type': 'mocha',
    'options': {
      'reporter': 'mocha-circleci-reporter'
    }
  },

  'test_settings': {
    'default': {
      'launch_url': 'http://local',
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

    'circleci': {
      'output_folder': '${CIRCLE_TEST_REPORTS}',
      'screenshots': {
        'path': '${CIRCLE_ARTIFACTS}'
      }
    },

    'WIN7-IE9': makeCBTTest('Win7x64-C1')('IE9', 'internet explorer'),
    'WIN7-IE10': makeCBTTest('Win7x64-C2')('IE10', 'internet explorer'),
    'WIN7-IE11': makeCBTTest('Win7x64-BASE')('IE11', 'internet explorer'),
    'WIN8-IE11': makeWin8('IE11', 'internet explorer'),
    'WIN10-IE11': makeWin10('IE11', 'internet explorer'),
    'WIN10-Chrome49': makeWin10('Chrome49x64', 'chrome'),
    'MAC9': makeMac('9', 'Safari7'),
    'MAC10': makeMac('10', 'Safari8'),
    'MAC11': makeMac('11', 'Safari9'),
    'Android42': makeCBTTest('Nexus7-And42')('MblChrome37', 'chrome'),
    'Android44': makeCBTTest('GalaxyS5-And44')('MblChrome35', 'chrome'),
    'iPadPro93': makeCBTTest('iPadPro-iOS9Sim')('MblSafari9.0', 'safari'),
    'iPadAir8': makeCBTTest('iPadAir-iOS8Sim')('MblSafari8.0', 'safari'),
    'iPadMini': makeCBTTest('iPadMiniRetina-iOS7Sim')('MblSafari7.0', 'safari'),
    'iPhone6P': makeCBTTest('iPhone6Plus-iOS8sim')('MblSafari8.0', 'safari'),
    'iPhone6': makeCBTTest('iPhone6-iOS8sim')('MblSafari8.0', 'safari'),
    'iPhone5s': makeCBTTest('iPhone5s-iOS7sim')('MblSafari7.0', 'safari')
  }
}
