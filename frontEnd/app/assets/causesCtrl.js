var causesApp = angular.module('frontApp', []);
causesApp.controller('causesCtrl', function causesCtrl($scope, $http) { //, $http
    $http.get('causes.json').success(function(response) {
        $scope.causes = response;
    });
});