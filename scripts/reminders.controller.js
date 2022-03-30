(function () {
    'use strict';

    angular
        .module('app')
        .controller('remindersController', reminders);

    function reminders(httpService, $state) {

        var vm = this;
        var pageNext = 1;
        var maxLimit;
        var newLimit;

        print();
        vm.next = next;
        vm.previous = previous;
        vm.delete = deleteReminder;
        vm.openMore = openMore;
        vm.update = update;


        function print() {
            httpService.view(pageNext)
                .then(function (response) {
                    vm.reminders = response.data;
                    maxLimit = response.headers('X-Total-Count');
                    newLimit = Math.ceil(maxLimit / 4);
                    console.log(newLimit);
                    console.log(vm.reminders);
                })
                .catch(function (error) {
                    alert('Error');
                })


        }

        function next() {
            if (pageNext < newLimit) {
                pageNext++;
            }
            print();

        }
        function previous() {
            if (pageNext > 1) {
                pageNext--;
            }

            print();

        }
        function deleteReminder(f) {

            var userval = confirm("Do you like to delite this reminder?!")

            if (userval == true) {
                httpService.delete(f)
                    .then(function (response) {

                        if (response.data)

                        print()
                        vm.msg = "Reminder is deleted!";
                        alert(vm.msg);

                    })
                        .catch(function (response) {

                            vm.msg = "Something is wrong";
                            alert(vm.msg);
                            vm.statusval = response.status;
                            vm.statustext = response.statusText;
                            vm.headers = response.headers();
                        })
                    
            }
        }

        function openMore(reminder) {
            $state.go("moreDetalis", { id: reminder.id })
        }

        function update(reminder) {
            $state.go("updateReminders", { id: reminder.id })
        }
    }
})();

