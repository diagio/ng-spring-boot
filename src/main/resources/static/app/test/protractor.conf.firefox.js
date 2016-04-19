exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['protractorSpec.js'],
	capabilities: {
		  'browserName': 'firefox'
		},
	jasmineNodeOpts: {
		showColors: true, // use colors in the command line report
		defaultTimeoutInterval: 30000
	}
};