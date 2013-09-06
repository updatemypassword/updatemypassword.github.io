
angular.module('ump', [])
    .value('dsSites', 'sites.json')
    .config(function($routeProvider) {
        $routeProvider.
            when('/', {controller:UmpListCtrl, templateUrl:'_list.html'})
    });

function UmpListCtrl($scope, $http, dsSites) {
    $http.get(dsSites).success(function(data) {
        $scope.sites = data;
    });
    $scope.orderProp = 'name';
}
