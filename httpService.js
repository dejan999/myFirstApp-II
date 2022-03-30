(function () {
    'use strict';
    angular
        .module('app')
        .factory('httpService', function ($http,$stateParams) {
            return {
                view: view,
                more: more,
                delete: deleteReminder,
                add: add,
                puting:puting,
                viewMethod:viewMethod
            }



            function view(pageNext) {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/reminders?_page=' + pageNext + '&_limit=4'
                })
                    .then(function (response) {
                        return response;
                    })
            }
            function more() {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/reminders',
                    params: { id: $stateParams.id }
                    
                })
                .then(function (response) {
                    
                    return response;
                    
                    
                })
            }
            function deleteReminder(f) {
                return $http({
                    method:'delete',
                    url:'http://localhost:3000/reminders/' + f
                })
                .then(function(response){
                    return response;
                })
            }
            function add(data) {
                return $http({
                    method:'post',
                    url:'http://localhost:3000/reminders',data
                })
                .then(function (response) {
                    return response;
                })
            }
            function puting(data) {
                return $http({
                    method:'put',
                    url:'http://localhost:3000/reminders/' + data.id, data
                })
                .then(function (response) {
                    return response;
                })
            }
            function viewMethod() {
                return $http({
                    method:'get',
                    url:'http://localhost:3000/reminders'
                })
                .then(function (response) {
                    return response;
                })
            }
        })
})();
