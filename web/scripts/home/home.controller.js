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
            };
            ;
            HomeController.serviceId = "HomeController";
            return HomeController;
        })();
        Home.HomeController = HomeController;
    })(Home = MyClub.Home || (MyClub.Home = {}));
})(MyClub || (MyClub = {}));
app.controller(MyClub.Home.HomeController.serviceId, ["$scope", "$location", MyClub.Home.HomeController]);
