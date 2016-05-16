module MyClub.Home {

    export class HomeController {
        static serviceId = "HomeController";
        static vm: HomeController;
        scope: ng.IScope;
        location: ng.ILocationProvider;
        players: string[];
        title: string;


        constructor($scope: ng.IScope, $location: ng.ILocationProvider) {
            this.scope = $scope;
            this.location = $location;
            HomeController.vm = this;
            this.title = "This is the home page!";

            this.activate();
        }

        activate(): void {
            this.players = ["Geoffrey Vandiest", "Hubert Lambert", "Steven Albert"];
        };
    }
}

app.controller(MyClub.Home.HomeController.serviceId, ["$scope", "$location", MyClub.Home.HomeController]);