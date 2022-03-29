angular
    .module('app')
    .controller('remindersController', reminders);

function reminders(httpService, $http,$state) {

    var vm = this;

        var pageNext = 1;
        var maxLimit;
        var newLimit;

    function print() {
        httpService.view(pageNext)
            .then(function (response) {
                vm.reminders = response.data;
                maxLimit = response.headers('X-Total-Count');
                newLimit = Math.ceil(maxLimit / 4);
                console.log(newLimit);
                console.log(vm.reminders);
            })

            
    }
    print()
    vm.next = function () {
        if (pageNext < newLimit) {
            pageNext++;
        }
       print()

    }
    vm.previous = function () {
        if (pageNext > 1) {
            pageNext--;
        }

        print()

    }
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