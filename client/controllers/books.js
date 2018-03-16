var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

	$scope.getBooks = function(){
		$http.get('/api/books').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/produse/'+id).success(function(response){
			$scope.book = response;
		});
	}

	$scope.getFeatured = function(){
		$http.get('/api/').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getBaietiBotezLumanari = function(){
		$http.get('/api/baietibotezlumanari').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getBaietiBotezTrusouri = function(){
		$http.get('/api/baietiboteztrusouri').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getBaietiBotezCostume = function(){
		$http.get('/api/baietibotezcostume').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getFeteBotezLumanari = function(){
		$http.get('/api/fetebotezlumanari').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getFeteBotezTrusouri = function(){
		$http.get('/api/feteboteztrusouri').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getFeteBotezRochite = function(){
		$http.get('/api/fetebotezrochite').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getCadouriJucarii = function(){
		$http.get('/api/cadourijucarii').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getTricouri = function(){
		$http.get('/api/cadouritricouri').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getPernite = function(){
		$http.get('/api/cadouripernite').success(function(response){
			$scope.books = response;
		});
	}

	$scope.addBook = function(){
		console.log($scope.book);
		$http.post('/api/books/', $scope.book).success(function(response){
			window.location.href='#/produse';
		});
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/books/'+id, $scope.book).success(function(response){
			window.location.href='#/produse';
		});
	}

	$scope.removeBook = function(id){
		$http.delete('/api/produse/'+id).success(function(response){
			window.location.href='#/produse';
		});
	}
}]);
