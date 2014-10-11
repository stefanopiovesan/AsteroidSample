'use strict';

eventsApp.controller('MyAsteroidController',
    function EventController($scope, myAsteroidApi) {
        myAsteroidApi.on(function () {
			$scope.history = myAsteroidApi.getHistory();
        });
    }
);
