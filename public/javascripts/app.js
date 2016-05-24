angular.module('listingsViews', [])

.controller('mainController', function($scope, $http) {

    $scope.formData = {};
    $scope.listingsData = {};
    $scope.listingData = {};
    $scope.signData = [];
    $scope.email = '';
    $scope.pass = '';

    // Get all todos
    $http.get('/productListings')
        .success(function(data) {
            $scope.listingsData = data;
            console.log(data);
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });

    // Create
    $scope.createTodo = function() {
      $http.post('/sign-in', $scope.signData)
      .success(function(data) {
          $scope.formData = {};
          $scope.signData = data;
          console.log(data);
      })
      .error(function(error) {
          console.log('Error: ' + error);
      });
    };

    $scope.submitData = function() {
      $scope.signData.push($scope.email);
      $scope.signData.push($scope.pass);
    }
});
