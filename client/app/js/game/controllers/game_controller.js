var angular = require('angular');

module.exports = function(app) {
  app.controller('GameController', ['$scope', '$ocLazyLoad', '$compile', '$window', '$location', function($scope , $ocLazyLoad , $compile, $window, $location) {
    $scope.loggedIn = false;

    if (!$window.localStorage.token && $scope.loggedIn === false) $location.url('/');
      else {
        console.log($window.localStorage.token);
        $scope.loggedIn = true;
        $location.url('/game');

      }
  }]);
};
