(function(){
    'use strict';
    angular
    .module('app')
    .controller('newRemindersController',newReminders);

    function newReminders(httpService,$state) {

        var vm=this;

        httpService.view()
        vm.addEmp=addEmp

        function addEmp(empTitle,empDetalis,empDate) {
           var data={
                reminder:empTitle,
                reminderDetalis:empDetalis,
                dateForReminder:empDate
            }

            if (data.reminder == null || data.reminderDetalis == null || data.dateForReminder == null) {
                alert("Please, fill in all fields!")
            }
            else {
                httpService.add(data)
                .then(function (response) {

                    if (response.data)
                    vm.msg = "Post Data Submitted Successfully!";
                    alert(vm.msg);
                    $state.go('reminders');
                    
                }).catch(function (error) {
                    alert('Error');
                })

                vm.empTitle = '';
                vm.empDetalis = '';
                vm.empDate = '';
            }

        }
    }
})();
