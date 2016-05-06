(function () {
    'use strict';

    angular
        .module('myClub')
        .controller('MyTeamController', myTeam);

    myTeam.$inject = ['$location']; 

    function myTeam($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.players = [];


        vm.title = 'myTeam';

        activate();

        function activate() {
            //$http.get('/api/myteam/players')
            //    .then(function(response) {
            //        vm.players = response;
            //    })
            //    .catch(function(error) {
            //        console.log(error);
            //    });
        }
    }
})();
