(function(){
    'use strict';
    angular
    .module('app')
    .controller('moreDetalisController',moreDetalis)

    function moreDetalis(httpService) {

        var vm=this;

        httpService.more()
            .then(function (response) {
                vm.reminders = response.data;
                console.log(vm.reminders);
            })
    }
})();
