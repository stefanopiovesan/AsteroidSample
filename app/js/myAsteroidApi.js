/**
 * Created by spiovesan on 04/10/14.
 */

(function () {
    'use strict';

    angular.module('myApp').factory('myAsteroidApi', ['$q', '$rootScope', myAsteroidApi]);

    function myAsteroidApi($q, $rootScope) {

        Ceres = new Asteroid("localhost:3000");
        Tasks = Ceres.getCollection("allHistory");
        Ceres.subscribe("allHistory");
        var tasksRQ = Tasks.reactiveQuery({});

        Ceres.on("connected", function () {
            console.log("Asteroid connect");
        });

        Ceres.on("put", function (id) {
            console.log("Asteroid put", id);
        });

        function getHistory() {

            var history = [{value: 50,date: new Date(2014, 9, 1)},{value: 30,date: new Date(2014, 9, 2)},{value: 10,date: new Date(2014, 9, 3)}];
            return history;
        };

        function on(callback) {

            tasksRQ.on("change", function () {
                console.log("on change", tasksRQ.result);
                var item = { value: data.fields.value, date: data.fields.date };
                $rootScope.$apply(function () {
                    callback(item);
                });
            });
        };

        return {
            on: on,
            getHistory: getHistory
        };
    }
 })();
