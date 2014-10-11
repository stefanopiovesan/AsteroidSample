/**
 * Created by spiovesan on 04/10/14.
 */

(function () {
    'use strict';

    angular.module('myApp').factory('myApi', ['$q', '$rootScope', myApi]);

    function myApi($q, $rootScope) {

        var options = {
            endpoint: "ws://localhost:3000/websocket",
            SocketConstructor: WebSocket
        };
        var ddp = new DDP(options);

        ddp.on("connected", function () {
            console.log("Connected");

            ddp.sub("allHistory");
        });

        function getHistory() {

            var history = [{value: 50,date: new Date(2014, 9, 1)},{value: 30,date: new Date(2014, 9, 2)},{value: 10,date: new Date(2014, 9, 3)}];
            return history;
        };

        function on(callback) {

            ddp.on("added", function (data) {
                console.log("on added", data.fields.date, data.fields.value);
                var item = { value: data.fields.value, date: data.fields.date };
                //callback(item);
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
