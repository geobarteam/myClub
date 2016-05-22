module MyClub.MyTeam {

    export class MyTeamController {
        static serviceId = "MyTeamController";
        static vm: MyTeamController;
        scope: ng.IScope;
        location: ng.ILocationProvider;
        players: string[];
        title: string;
        
        constructor($scope: ng.IScope, $location: ng.ILocationProvider) {
            this.scope = $scope;
            this.location = $location;
            MyTeamController.vm = this;
            this.title = "My Team";
           
            this.activate();
        }

        activate(): void {
            this.players = ["Geoffrey Vandiest", "Hubert Lambert", "Steven Albert"];
        };
    }
}

app.controller(MyClub.MyTeam.MyTeamController.serviceId, ["$scope", "$location", MyClub.MyTeam.MyTeamController]);