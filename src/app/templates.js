angular.module('templates', ['app/app.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'<h1>Data Attributes</h1>\n' +
		'\n' +
		'<!-- <div class="image" data-score="100"></div>\n' +
		' -->\n' +
		'\n' +
		'<ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-4">\n' +
		'  <li>\n' +
		'  	<div class="image" data-year="2014">\n' +
		'  		<img src="assets/img/inside.jpg">\n' +
		'  	</div>\n' +
		'  </li>\n' +
		'  <li>\n' +
		'  	<div class="image" data-year="1991">\n' +
		'  		<img src="assets/img/barton.jpg" alt="" data-year="1991">\n' +
		'  	</div>\n' +
		'  </li>\n' +
		'  <li>\n' +
		'  	<div class="image" data-year="1996">\n' +
		'			<img src="assets/img/fargo.jpg" alt="" data-year="1996">\n' +
		'		</div>\n' +
		'  </li>\n' +
		'  <li>\n' +
		'  	<div class="image" data-year="2000">\n' +
		'  		<img src="assets/img/brother.jpg" alt="" data-year="2000">\n' +
		'  	</div>\n' +
		'  </li>\n' +
		'</ul>');
}]);
