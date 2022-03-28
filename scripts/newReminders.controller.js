angular
    .module('app')
    .controller('newRemindersController',newReminders);

    function newReminders(httpService,$http) {

        var vm=this;

        httpService.view()
        
        vm.addEmp=function (empTitle,empDetalis,empDate) {
            data={
                reminder:empTitle,
                reminderDetalis:empDetalis,
                dateForReminder:empDate
            }
            console.log(data);

            if (data.reminder == null || data.reminderDetalis == null || data.dateForReminder == null) {
                alert("Please, fill in all fields!")
            }
            else {
                $http.post('http://localhost:3000/reminders', JSON.stringify(data)).then(function (response) {

                    if (response.data)


                    vm.msg = "Post Data Submitted Successfully!";
                    alert(vm.msg);

                }, function (response) {

                    vm.msg = "Service not Exists";
                    alert(vm.msg);
                    vm.statusval = response.status;

                    vm.statustext = response.statusText;

                    vm.headers = response.headers();

                });

                vm.empTitle = '';
                vm.empDetalis = '';
                vm.empDate = '';
            }

        }
    }