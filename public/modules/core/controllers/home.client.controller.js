'use strict';

angular.module('core').controller('HomeController', ['$scope', '$http', 'uiGmapGoogleMapApi', '$geolocation',
  function($scope, $http, uiGmapGoogleMapApi, $geolocation) {

    $scope.businesses = [];

    $scope.map = { center: { latitude: 37.3894, longitude: -122.0819 }, zoom: 12 };

    $scope.markers = [];

    $geolocation.getCurrentPosition({
      timeout: 60000
    }).then( function (data) {
      $scope.map.center.latitude = data.coords.latitude;
      $scope.map.center.longitude = data.coords.longitude;
    });

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

