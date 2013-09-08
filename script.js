
angular.module('ump', [])
    .value('dsSites', 'sites.json')
    .config(function($routeProvider) {
        $routeProvider.
            when('/', {controller: 'List', templateUrl: 'views/list.html'})
    });

angular.module('ump')
    .controller('List', function($scope, $http, dsSites) {
        $http.get(dsSites).success(function(data) {
            $scope.sites = data;
        });
        $scope.orderProp = 'name';
    });
