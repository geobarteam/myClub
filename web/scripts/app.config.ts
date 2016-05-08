(function () {
    'use strict';
    angular.module('myClub')
        .config(initrouter);
        
    function initrouter($stateProvider : any, $locationProvider : any, $urlRouterProvider : any) {
       var test:number = 3;
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state(
            'home',
            {
                url: '/',
                templateUrl: 'app/home.html',
                controller: "HomeController",
                controllerAs: 'vm'
            }
            )
            .state(
            'myteam',
            {
                url: '/myteam',
                templateUrl: 'app/myTeam.html',
                controller: "MyTeamController",
                controllerAs: 'vm'
            }
            );
    }
})();