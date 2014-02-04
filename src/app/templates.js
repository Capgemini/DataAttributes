angular.module('templates', ['app/app.view.html', 'app/movies.view.html']);

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
