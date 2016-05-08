(function () {
    'use strict';
    angular.module('myClub', ['ui.router']);
})();
(function () {
    'use strict';
    angular.module('myClub')
        .config(initrouter);
    function initrouter($stateProvider, $locationProvider, $urlRouterProvider) {
        var test = 3;
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'app/home.html',
            controller: "HomeController",
            controllerAs: 'vm'
        })
            .state('myteam', {
            url: '/myteam',
            templateUrl: 'app/myTeam.html',
            controller: "MyTeamController",
            controllerAs: 'vm'
        });
    }
})();
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
//# sourceMappingURL=app.js.map