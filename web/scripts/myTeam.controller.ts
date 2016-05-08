(function () {
    'use strict';

    angular
        .module('myClub')
        .controller('MyTeamController', myTeam);

    myTeam.$inject = ['$location']; 

    function myTeam($location:any) {
        /* jshint validthis:true */
        var vm = this;
        vm.players = [];


        vm.title = 'myTeam';

        activate();

        function activate() {
           
        }
    }
})();
