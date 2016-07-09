require.config({
	baseUrl: ".",
	paths: {
		text: "vendor/requirejs/text",
		css: "vendor/requirejs/css",
		jquery: "vendor/jquery/jquery-1.11.2",
		bootstrap: 'vendor/bootstrap/js/bootstrap',
		knockout: "vendor/knockout/knockout-3.2.0.debug",
		uui: "vendor/uui/js/u",
		director:"vendor/director/director",
		biz: "vendor/uui/js/u.biz",
		pages:"pages"
	},
	shim: {
		'uui':{
			deps:["knockout"]
		},
		'bootstrap': {
			deps: ["jquery"]
		}
	}
});