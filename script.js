
function SiteListCtrl($scope, $http) {
    $http.get('sites.json').success(function(data) {
        $scope.sites = data;
    });

    $scope.orderProp = 'name';
}
