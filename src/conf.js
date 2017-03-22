var HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

	// The address of a running selenium server.
	seleniumAddress : 'http://localhost:4444/wd/hub',

//	 Capabilities to be passed to the webdriver instance.
//	 capabilities: {
//	 'browserName': 'firefox',
//	  'marionette': true
//	 },
	capabilities : {
		'browserName' : 'chrome',
		'chromeOptions' : {
			'args' : ['--disable-extensions']
		}
	},
	 chromeOnly: true,
	 directConnect: true,
	// Specify the name of the specs files.
	specs : [ 'operation_spec.js' ],
	framework: 'jasmine2',
	// Options to be passed to Jasmine-node.
	jasmineNodeOpts : {
		onComplete : null,
		isVerbose : false,
		showColors : true,
		includeStackTrace : true,
		defaultTimeoutInterval: 300000
	},
	onPrepare: function () {
		jasmine.getEnv().addReporter(new HtmlReporter({
			 savePath: 'target/screenshots',
			 takeScreenshotsOnlyOnFailures: true,
	         fileName: 'protractor-web report',
	         cssOverrideFile: 'css/style.css'
	      }));
		
		browser.ignoreSynchronization = true;
		browser.get('http://localhost:8080/projector/index.html');
		browser.waitForAngular();
		browser.manage().window().maximize();
	}
};