angular.module('fuzzy', ['angularjs-gauge'])
.controller('MainCtrl', function($scope) {
    $scope.logic = false;

    $scope.changeLogic = function() {
        console.log($scope.logic);
        $scope.logic = !$scope.logic;
    }

    $scope.$watch('texto1', function() {
        $scope.ratio = fuzzball.ratio($scope.texto1, $scope.texto2);
        $scope.token_sort_ratio = fuzzball.ratio($scope.texto1, $scope.texto2);
        $scope.token_set_ratio = fuzzball.token_set_ratio($scope.texto1, $scope.texto2);
    });
    $scope.$watch('texto2', function() {
        $scope.ratio = fuzzball.ratio($scope.texto1, $scope.texto2);
        $scope.token_sort_ratio = fuzzball.token_sort_ratio($scope.texto1, $scope.texto2);
        $scope.token_set_ratio = fuzzball.token_set_ratio($scope.texto1, $scope.texto2);
    });
});