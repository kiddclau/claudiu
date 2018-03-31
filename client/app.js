var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/books.handlebars'
	})

	.when('/send', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})

	//consola de admin se poate schimba cu orice PATH
	.when('/produseadmin', {
		controller:'BooksController',
		templateUrl: 'views/produse.html'
	})

	.when('/books/details/:id',{
    controller:'BooksController',
		templateUrl: 'views/book_details.html'
	})

	.when('/produse/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/detaliiprodus.html'
	})
//detailspages
	.when('/produse/detaliiprodusbaietiboteztrusouri/:id',{
		controller:'BooksController',
		templateUrl: 'views/detaliiprodusbaietiboteztrusouri.html'
	})

	.when('/produse/detaliiprodusfeteboteztrusouri/:id',{
		controller:'BooksController',
		templateUrl: 'views/detaliiprodusfeteboteztrusouri.html'
	})

	.when('/produse/detaliiprduscadouripernita/:id',{
		controller:'BooksController',
		templateUrl: 'views/detaliiprduscadouripernita.html'
	})

//cadaouri details
	.when('/produse/detaliiproduscadourijucarii/:id',{
		controller:'BooksController',
		templateUrl: 'views/detaliiproduscadourijucarii.html'
	})

	.when('/produse/detaliiproduscadouripernita/:id',{
		controller:'BooksController',
		templateUrl: 'views/detaliiproduscadouripernita.html'
	})

	.when('/produse/detaliiproduscadouritricou/:id',{
		controller:'BooksController',
		templateUrl: 'views/detaliiproduscadouritricou.html'
	})

	.when('/produse/detailsadmin/:id',{
		controller:'BooksController',
		templateUrl: 'views/detaliiprodusadmin.html'
	})



//
	.when('/produse/add',{
		controller:'BooksController',
		templateUrl: 'views/add_produs.html'
	})

	.when('/baietibotezlumanari',{
			controller:'BooksController',
			templateUrl: 'views/baietibotezlumanari.html'
		})

		.when('/baietiboteztrusouri',{
				controller:'BooksController',
				templateUrl: 'views/baietiboteztrusouri.html'
			})

			.when('/baietibotezcostume',{
					controller:'BooksController',
					templateUrl: 'views/baietibotezcostume.html'
				})

			.when('/fetebotezlumanari',{
					controller:'BooksController',
					templateUrl: 'views/fetebotezlumanari.html'
				})

				.when('/feteboteztrusouri',{
						controller:'BooksController',
						templateUrl: 'views/feteboteztrusouri.html'
					})

					.when('/fetebotezrochite',{
							controller:'BooksController',
							templateUrl: 'views/fetebotezrochite.html'
						})

//cadouri
.when('/cadourijucarii',{
		controller:'BooksController',
		templateUrl: 'views/cadourijucarii.html'
	})

	.when('/cadouritricouri',{
			controller:'BooksController',
			templateUrl: 'views/cadouritricouri.html'
		})

		.when('/cadouripernite',{
				controller:'BooksController',
				templateUrl: 'views/cadouripernite.html'
			})
///termeni+politicaretur+platasilivrare
.when('/platasilivrare',{
		controller:'BooksController',
		templateUrl: 'views/platasilivrare.html'
	})

	.when('/politicaretur',{
			controller:'BooksController',
			templateUrl: 'views/politicaderetur.html'
		})

		.when('/termenisiconditii',{
				controller:'BooksController',
				templateUrl: 'views/termenisiconditii.html'
			})


///

	.when('/books/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_book.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
