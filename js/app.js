var app = angular.module('myClub', ['ui.router']);
app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: "HomeController",
        controllerAs: 'vm'
    })
        .state('myteam', {
        url: '/myteam',
        templateUrl: 'app/myTeam/myTeam.html',
        controller: "MyTeamController",
        controllerAs: 'vm'
    });
});
(function () {
    'use strict';
    angular
        .module('myClub')
        .controller('HomeController', myTeam);
    myTeam.$inject = ['$location'];
    function myTeam($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.players = [];
        vm.title = 'Home';
        activate();
        function activate() {
        }
    }
})();
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
        }
    }
})();
