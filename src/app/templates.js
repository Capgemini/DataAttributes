angular.module('templates', ['app/app.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'<h1>Data Attributes</h1>\n' +
		'\n' +
		'<div class="image" data-score="100"></div>\n' +
		'');
}]);
