angular.module('showcaseApp')
  .controller('ExperienceCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('myJson.json')
      .success(function(res) {
        $scope.experiences = res.Experience;
      });
  });
/**
 * Created by webdev on 4/14/15.
 */
