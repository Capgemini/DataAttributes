'use strict';

angular.module('app', ['templates', 'common', 'ngRoute', 'movies'])
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

angular.module('dependencies', []);;'use strict';

/**
 * @ngdoc function
 * @name ng.module:movies
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('movies', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:moviesCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('MoviesCtrl', ['$scope', function ($scope) {

		$scope.movies = [
			{
				year: '2014',
				rating: '7.9',
				poster: 'assets/img/inside.jpg'
			},
			{
				year: '1991',
				rating: '7.8',
				poster: 'assets/img/barton.jpg'
			},
			{
				year: '1996',
				rating: '8.2',
				poster: 'assets/img/fargo.jpg'
			},
			{
				year: '2000',
				rating: '7.7',
				poster: 'assets/img/brother.jpg'
			}
		];
	}]);;angular.module('templates', ['app/app.view.html', 'app/movies.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'<div class="small-12 columns">	\n' +
		'	<div class="row">\n' +
		'		<div class="small-12 columns">\n' +
		'			<h1>Data Attributes</h1>\n' +
		'			<h5>Hovering over each film poster will reveal the non-visible data attribute which is the year the film was released.</h5>\n' +
		'			<h5>This data has been used to sort the films in order of oldest to most recent.</h5>\n' +
		'		</div>\n' +
		'	</div>\n' +
		'\n' +
		'	<div class="row">\n' +
		'		<div class="small-12 columns">\n' +
		'			<ng-include src="\'app/movies.view.html\'"></ng-include>\n' +
		'		</div>	\n' +
		'	</div>\n' +
		'</div>	');
}]);

angular.module('app/movies.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/movies.view.html',
		'<div ng-controller="MoviesCtrl">\n' +
		'	<ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-4">\n' +
		'		<li ng-repeat="movie in movies | orderBy:\'year\'">\n' +
		'			<div class="image" data-year="{{movie.year}}" data-rating="{{movie.rating}}">\n' +
		'				<img src="{{movie.poster}}">\n' +
		'			</div>\n' +
		'		</li>\n' +
		'	</ul>\n' +
		'</div>');
}]);
