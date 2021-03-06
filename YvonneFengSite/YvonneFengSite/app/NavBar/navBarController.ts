﻿module NavBar {
    export class Controller {
        static $inject = ['$scope'];

        constructor(private $scope: NavBarScope) {
            $scope.message = "Yvonne.wyf@gmail.com";
            $scope.name = "Whatup";
            $scope.categories = [
                new Category("Work", null, [
                    new Category("Greener On The Other Side?", "#Collections/GreenerOnTheOtherSide", null),
                    new Category("The Body As Metaphor", "#Collections/BodyAsMetaphor", null),
                    new Category("Telescreens", "#Collections/Telescreens", null),
                    new Category("An Amnesiac's Stories", "#Collections/AmnesiacsStories", null),
                ]),
                new Category("Drawing", null, [
                    new Category("Sketchbook", "#Collections/Sketches", null),
                    new Category("Invisible Wall", "#Collections/InvisibleWall", null)
                ]),
                new Category("Publication", "#Publications", null),
                new Category("CV", "#Biography", null),
                new Category("News", "#News", null),
                new Category("Contact", "#Contact", null),
            ];
            $scope.title = "Home";
        }
    }

    interface NavBarScope extends ng.IScope {
        message: string
        name: string
        categories: Category[]
        title: string
    }

    class Category {
        constructor(public title: string,
            public link: string,
            public subCategories: Category[]) {
        }

    }
}

