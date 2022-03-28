angular
    .module('app')
    .controller('remindersController', reminders);

function reminders(httpService, $http,$state) {

    var vm = this;

    function print() {
        httpService.view()
            .then(function (response) {
                vm.reminders = response.data;
                console.log(vm.reminders);
            })
    }
    print()

    vm.delete = function (f) {

        var userval = confirm("Do you like to delite this reminder?!")

        if (userval == true) {
            $http.delete('http://localhost:3000/reminders/' + f).then(function (response) {

                if (response.data)

                 print()
                vm.msg = "Reminder is deleted!";
                alert(vm.msg);

            }, function (response) {

                vm.msg = "something is wrong";
                alert(vm.msg);
                vm.statusval = response.status;

                vm.statustext = response.statusText;

                vm.headers = response.headers();

            });
        }
    }

    vm.openMore = function (reminder) {
        console.log(reminder);
        $state.go("moreDetalis", { id: reminder.id })
        
    }

    vm.update = function (reminder) {
        
        $state.go("updateReminders", { id: reminder.id })
        
    }
}