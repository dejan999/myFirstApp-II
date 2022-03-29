angular
    .module('app')
    .controller('updateRemindersController', update)



function update($http, $stateParams,$state) {

    var vm = this;

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

    vm.newUpdate = function () {

        var vm=this;

        $http.put('http://localhost:3000/reminders/' + vm.reminders[0].id, JSON.stringify(vm.reminders[0])).then(function (response) {

            if (response.data)

                $http({
                    method: 'GET',
                    url: 'http://localhost:3000/reminders',

                })
                    .then(function (response) {
                        response.data[0].dateForReminder = new Date(response.data[0].dateForReminder);
                        vm.reminders = response.data;

                    })

            vm.msg = "Reminder is updated!";
            alert(vm.msg);
            $state.go('reminders');


        }, function (response) {

            vm.msg = "Something is wrong";
            alert(vm.msg);
            vm.statusval = response.status;

            vm.statustext = response.statusText;

            vm.headers = response.headers();

        });
    }




}