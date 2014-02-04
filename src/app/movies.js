'use strict';

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
	}]);