angular.module('listingsViews', [])

.controller('mainController', function($scope, $http) {

    $scope.formData = {};
    $scope.listingsData = {};

    // Get all todos
    $http.get('/productListings')
        .success(function(data) {
            $scope.listingsData = data;
            console.log(data);
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });
});
