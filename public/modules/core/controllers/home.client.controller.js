'use strict';

angular.module('core').controller('HomeController', ['$scope', '$http', 'uiGmapGoogleMapApi',
  function($scope, $http, uiGmapGoogleMapApi) {

    $scope.businesses = [];

    $scope.map = { center: { latitude: 37.3894, longitude: -122.0819 }, zoom: 12 };

    $scope.markers = [];

    $scope.getYelpResults = function (location, term) {
      $http.get('/api/yelp', {
        params: {term: term, location: location}
      }).success( function (data) {
        $scope.map.center = data.region.center;
        $scope.businesses = data.businesses;
        for (var i = 0; i < $scope.businesses.length; i++) {
          var biz = $scope.businesses[i];
          $scope.markers.push({id: biz.id, coords: biz.location.coordinate});
        }
      });
    };

  }
]);

