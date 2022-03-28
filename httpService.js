angular
    .module('app')
    .factory('httpService',function ($http) {
    
    function view() {
        
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/reminders'
            
        })
        .then(function (response) {
            
            return response;
            
            
        })
    }
    return{
        view:view
        
    }
})