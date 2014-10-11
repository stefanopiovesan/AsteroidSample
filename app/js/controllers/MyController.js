'use strict';

eventsApp.controller('MyController',
    function EventController($scope, myApi) {

        //$scope.history = myApi.getHistory();
        myApi.on(function (data) {
            $scope.history.push(data);
        });
        $scope.history = [];
    }
);

eventsApp.controller('MyAsteroidController',
    function EventController($scope, myAsteroidApi) {

        //$scope.history = myAsteroidApi.getHistory();
        myAsteroidApi.on(function (data) {
            $scope.history.push(data);
        });
        $scope.history = [];
    }
);