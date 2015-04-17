angular.module('showcaseApp')
  .controller('ProjectCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('myJson.json')
      .success(function(res) {
        $scope.projects = res.Projets;
      });
  });
