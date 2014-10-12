/**
 * Created by spiovesan on 04/10/14.
 */

(function () {

    'use strict';

    angular.module('myApp').factory('myAsteroidApi', ['$q', '$rootScope', myAsteroidApi]);

    function myAsteroidApi($q, $rootScope) {

        Ceres = new Asteroid("localhost:3000");
        Tasks = Ceres.getCollection("history");
        Ceres.subscribe("allHistory");
        var tasksRQ = Tasks.reactiveQuery({});

        function getHistory() {
            return tasksRQ.result;
        }

        function on(callback) {
            tasksRQ.on("change", function () {
                $rootScope.$apply(function () {
                    callback();
                });
            });
        }

        return {
            on: on,
            getHistory: getHistory
        };
    }

 })();
