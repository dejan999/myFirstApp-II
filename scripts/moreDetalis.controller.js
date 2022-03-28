angular
    .module('app')
    .controller('moreDetalisController',moreDetalis)

    function moreDetalis($http,$stateParams) {

        var vm=this;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/reminders',
            params: { id: $stateParams.id }
        })
            .then(function (response) {
                vm.reminders = response.data;
                console.log(vm.reminders);
            })
    }