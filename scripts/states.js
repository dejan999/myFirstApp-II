(function(){
    'use strict';
    angular
    .module('app')
    .config(config);

        function config($stateProvider) {
        $stateProvider
            .state("reminders", {
                url: "",
                templateUrl: "Templeates/reminders.html",
                controller: "remindersController",
                controllerAs: "vm"
            })
            .state("newReminders", {
                url: "/newReminders",
                templateUrl: "Templeates/newReminders.html",
                controller: "newRemindersController",
                controllerAs: "vm"
            })
            .state("moreDetalis", {
                url: "/moreDetalis/{id:string}",
                templateUrl: "Templeates/moreDetalis.html",
                controller: "moreDetalisController",
                controllerAs: "vm"
            })
            .state("updateReminders", {
                url: "/updateReminders/{id:string}",
                templateUrl: "Templeates/updateReminders.html",
                controller: "updateRemindersController",
                controllerAs: "vm"
            })
    }
})();
