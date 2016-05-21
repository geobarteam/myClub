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
