(function () {
    'use strict';
    angular
        .module('app')
        .controller('updateRemindersController', update)



    function update(httpService, $stateParams, $state) {

        var vm = this;
        vm.newUpdate = newUpdate;

        httpService.more()
            .then(function (response) {
                response.data[0].dateForReminder = new Date(response.data[0].dateForReminder);
                vm.reminders = response.data;
                console.log(vm.reminders);
            })

        function newUpdate() {

           

            httpService.puting(vm.reminders[0])
                .then(function (response) {

                    if (response.data)

                        httpService.viewMethod()
                            .then(function (response) {
                                response.data[0].dateForReminder = new Date(response.data[0].dateForReminder);
                                vm.reminders = response.data;

                            })

                    vm.msg = "Reminder is updated!";
                    alert(vm.msg);
                    $state.go('reminders');


                })
                .catch(function (error) {
                    alert('Error');
                })
        }




    }
})();
