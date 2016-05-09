(function () {
    'use strict';


    angular
        .module('myClub')
        .controller('HomeController', myTeam);

    myTeam.$inject = ['$location'];

    function myTeam($location:any) {
        /* jshint validthis:true */
        var vm = this;
        vm.players = [];


        vm.title = 'Home';

        activate();

        function activate() {
           
        }
    }
})();

