'use strict';

angular.module('app', ['templates', 'common', 'ngRoute'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/app.view.html',
				controller: 'AppCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
	}])
	.controller('AppCtrl', ['$scope', function ($scope) {
			$scope.message = 'Hello World';
			$scope.templateUrl = 'app/app.view.html';
		}
	]);;'use strict';

angular.module('common', ['dependencies']);;'use strict';

angular.module('dependencies', []);;angular.module('templates', ['app/app.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'<div class="small-12 columns">	\n' +
		'	<div class="row">\n' +
		'		<div class="small-12 columns">\n' +
		'			<h1>Data Attributes</h1>\n' +
		'			<h5>Hovering over each film poster will reveal the non-visible data attribute which is the year the film was released</h5>\n' +
		'		</div>\n' +
		'	</div>\n' +
		'\n' +
		'	<div class="row">\n' +
		'		<div class="small-12 columns">\n' +
		'			<ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-4">\n' +
		'			  <li>\n' +
		'			  	<div class="image" data-year="2014" data-rating="7.9">\n' +
		'			  		<img src="assets/img/inside.jpg">\n' +
		'			  	</div>\n' +
		'			  </li>\n' +
		'			  <li>\n' +
		'			  	<div class="image" data-year="1991" data-rating="7.8">\n' +
		'			  		<img src="assets/img/barton.jpg">\n' +
		'			  	</div>\n' +
		'			  </li>\n' +
		'			  <li>\n' +
		'			  	<div class="image" data-year="1996" data-rating="8.2">\n' +
		'						<img src="assets/img/fargo.jpg">\n' +
		'					</div>\n' +
		'			  </li>\n' +
		'			  <li>\n' +
		'			  	<div class="image" data-year="2000" data-rating="7.7">\n' +
		'			  		<img src="assets/img/brother.jpg">\n' +
		'			  	</div>\n' +
		'			  </li>\n' +
		'			</ul>\n' +
		'		</div>	\n' +
		'	</div>\n' +
		'</div>	');
}]);
