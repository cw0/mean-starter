angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';

	$scope.formData = {};

	$http.get('/api/nerds')
		.then(function(data) {
			$scope.nerds = data.data;
			console.log(data);
		});

	$scope.createNerd = function() {
		$http.post('/api/nerds', $scope.formData)
			.then(function(data) {
				$scope.formData = {};
				$scope.nerds = data.data;
				console.log(data);
			});
	}

	$scope.deleteNerd = function(id) {
		$http.delete('/api/nerds/' + id)
			.then(function(data) {
				$scope.nerds = data.data;
				console.log(data);
			});
	};

});
