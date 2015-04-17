angular.module('showcaseApp')
  .controller('PassionCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('myJson.json')
      .success(function(res) {
        $scope.data = res;


        $scope.intro = res.Presentation;
        $scope.projects = res.ProjetEnCours;
        $scope.loisirs = res.Loisirs;
        $scope.experiences = res.Experience;
      });
  });
/**
 * Created by webdev on 4/14/15.
 */
