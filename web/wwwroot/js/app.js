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

var MyClub;
(function (MyClub) {
    var Home;
    (function (Home) {
        var HomeController = (function () {
            function HomeController($scope, $location) {
                this.scope = $scope;
                this.location = $location;
                HomeController.vm = this;
                this.title = "This is the home page!";
                this.activate();
            }
            HomeController.prototype.activate = function () {
                this.players = ["Geoffrey Vandiest", "Hubert Lambert", "Steven Albert"];
            };
            ;
            HomeController.serviceId = "HomeController";
            return HomeController;
        }());
        Home.HomeController = HomeController;
    })(Home = MyClub.Home || (MyClub.Home = {}));
})(MyClub || (MyClub = {}));
app.controller(MyClub.Home.HomeController.serviceId, ["$scope", "$location", MyClub.Home.HomeController]);

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvbXlDbHViLm1vZHVsZS50cyIsInNjcmlwdHMvaG9tZS9ob21lLmNvbnRyb2xsZXIudHMiLCJzY3JpcHRzL215VGVhbS9teVRlYW0uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLGNBQW1CLEVBQUUsaUJBQXNCLEVBQUUsa0JBQXVCO0lBQzVFLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsY0FBYztTQUNULEtBQUssQ0FDRixNQUFNLEVBQ047UUFDSSxHQUFHLEVBQUUsR0FBRztRQUNSLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsVUFBVSxFQUFFLGdCQUFnQjtRQUM1QixZQUFZLEVBQUUsSUFBSTtLQUNyQixDQUNKO1NBQ0EsS0FBSyxDQUNGLFFBQVEsRUFDUjtRQUNJLEdBQUcsRUFBRSxTQUFTO1FBQ2QsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxVQUFVLEVBQUUsa0JBQWtCO1FBQzlCLFlBQVksRUFBRSxJQUFJO0tBQ3JCLENBQ0osQ0FBQztBQUNWLENBQUMsQ0FBQyxDQUFDOztBQ3hCSCxJQUFPLE1BQU0sQ0F3Qlo7QUF4QkQsV0FBTyxNQUFNO0lBQUMsSUFBQSxJQUFJLENBd0JqQjtJQXhCYSxXQUFBLElBQUksRUFBQyxDQUFDO1FBRWhCO1lBU0ksd0JBQVksTUFBaUIsRUFBRSxTQUErQjtnQkFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUMxQixjQUFjLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztnQkFFdEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFFRCxpQ0FBUSxHQUFSO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUM1RSxDQUFDOztZQW5CTSx3QkFBUyxHQUFHLGdCQUFnQixDQUFDO1lBb0J4QyxxQkFBQztRQUFELENBckJBLEFBcUJDLElBQUE7UUFyQlksbUJBQWMsaUJBcUIxQixDQUFBO0lBQ0wsQ0FBQyxFQXhCYSxJQUFJLEdBQUosV0FBSSxLQUFKLFdBQUksUUF3QmpCO0FBQUQsQ0FBQyxFQXhCTSxNQUFNLEtBQU4sTUFBTSxRQXdCWjtBQUVELEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7O0FDMUIxRyxDQUFDO0lBQ0csWUFBWSxDQUFDO0lBRWIsT0FBTztTQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDaEIsVUFBVSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTVDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUUvQixnQkFBZ0IsU0FBYTtRQUN6QiwyQkFBMkI7UUFDM0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFHaEIsRUFBRSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFFcEIsUUFBUSxFQUFFLENBQUM7UUFFWDtRQUVBLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdteUNsdWInLCBbJ3VpLnJvdXRlciddKTtcclxuYXBwLmNvbmZpZygoJHN0YXRlUHJvdmlkZXI6IGFueSwgJGxvY2F0aW9uUHJvdmlkZXI6IGFueSwgJHVybFJvdXRlclByb3ZpZGVyOiBhbnkpID0+IHtcclxuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKFxyXG4gICAgICAgICAgICAnaG9tZScsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaG9tZS9ob21lLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJIb21lQ29udHJvbGxlclwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnN0YXRlKFxyXG4gICAgICAgICAgICAnbXl0ZWFtJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL215dGVhbScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9teVRlYW0vbXlUZWFtLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJNeVRlYW1Db250cm9sbGVyXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbn0pO1xyXG5cclxuIiwibW9kdWxlIE15Q2x1Yi5Ib21lIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSG9tZUNvbnRyb2xsZXIge1xyXG4gICAgICAgIHN0YXRpYyBzZXJ2aWNlSWQgPSBcIkhvbWVDb250cm9sbGVyXCI7XHJcbiAgICAgICAgc3RhdGljIHZtOiBIb21lQ29udHJvbGxlcjtcclxuICAgICAgICBzY29wZTogbmcuSVNjb3BlO1xyXG4gICAgICAgIGxvY2F0aW9uOiBuZy5JTG9jYXRpb25Qcm92aWRlcjtcclxuICAgICAgICBwbGF5ZXJzOiBzdHJpbmdbXTtcclxuICAgICAgICB0aXRsZTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoJHNjb3BlOiBuZy5JU2NvcGUsICRsb2NhdGlvbjogbmcuSUxvY2F0aW9uUHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29wZSA9ICRzY29wZTtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICAgICAgSG9tZUNvbnRyb2xsZXIudm0gPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gXCJUaGlzIGlzIHRoZSBob21lIHBhZ2UhXCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzID0gW1wiR2VvZmZyZXkgVmFuZGllc3RcIiwgXCJIdWJlcnQgTGFtYmVydFwiLCBcIlN0ZXZlbiBBbGJlcnRcIl07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuYXBwLmNvbnRyb2xsZXIoTXlDbHViLkhvbWUuSG9tZUNvbnRyb2xsZXIuc2VydmljZUlkLCBbXCIkc2NvcGVcIiwgXCIkbG9jYXRpb25cIiwgTXlDbHViLkhvbWUuSG9tZUNvbnRyb2xsZXJdKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdteUNsdWInKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdNeVRlYW1Db250cm9sbGVyJywgbXlUZWFtKTtcclxuXHJcbiAgICBteVRlYW0uJGluamVjdCA9IFsnJGxvY2F0aW9uJ107IFxyXG5cclxuICAgIGZ1bmN0aW9uIG15VGVhbSgkbG9jYXRpb246YW55KSB7XHJcbiAgICAgICAgLyoganNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICB2bS5wbGF5ZXJzID0gW107XHJcblxyXG5cclxuICAgICAgICB2bS50aXRsZSA9ICdteVRlYW0nO1xyXG5cclxuICAgICAgICBhY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
