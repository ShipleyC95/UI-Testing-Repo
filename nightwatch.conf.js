var SELENIUM_CONFIG = {
    start_process: true,
    server_path: './bin/selenium-server-standalone-3.9.0.jar',
    host: '127.0.0.1',
    port: 4444
};

var FIREFOX_CONFIG = {
    browserName: 'firefox',
    javascriptEnabled: true,
    acceptSslCerts: true
};

var DEFAULT_CONFIG = {
    launch_url: 'http://localhost',
    selenium_port: 4444,
    selenium_host: 'localhost',
    desiredCapabilities: FIREFOX_CONFIG
}

var ENVIRONMENTS = {
    default: DEFAULT_CONFIG
}

module.exports = {
    src_folders: ['SeleniumTests'],
    selenium: SELENIUM_CONFIG,
    test_settings: ENVIRONMENTS
}