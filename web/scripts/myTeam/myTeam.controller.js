var MyClub;
(function (MyClub) {
    var MyTeam;
    (function (MyTeam) {
        var MyTeamController = (function () {
            function MyTeamController($scope, $location) {
                this.scope = $scope;
                this.location = $location;
                MyTeamController.vm = this;
                this.title = "My Team";
                this.activate();
            }
            MyTeamController.prototype.activate = function () {
                this.players = ["Geoffrey Vandiest", "Hubert Lambert", "Steven Albert"];
            };
            ;
            MyTeamController.serviceId = "MyTeamController";
            return MyTeamController;
        })();
        MyTeam.MyTeamController = MyTeamController;
    })(MyTeam = MyClub.MyTeam || (MyClub.MyTeam = {}));
})(MyClub || (MyClub = {}));
app.controller(MyClub.MyTeam.MyTeamController.serviceId, ["$scope", "$location", MyClub.MyTeam.MyTeamController]);
