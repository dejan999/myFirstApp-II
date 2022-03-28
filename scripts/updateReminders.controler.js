angular
    .module('app')
    .controller('updateRemindersController',update)

    function update($http,$stateParams) {

        var vm=this;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/reminders',
            params: { id: $stateParams.id }
        })
            .then(function (response) {
                response.data[0].dateForReminder = new Date(response.data[0].dateForReminder);
                vm.reminders = response.data;
                console.log(vm.reminders);
            })
    }