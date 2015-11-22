﻿module NavBar {
    export class Controller {
        static $inject = ['$scope'];

        constructor(private $scope: NavBarScope) {
            $scope.message = "Yvonne.wyf@gmail.com";
            $scope.name = "Whatup";
            $scope.categories = [
                new Category("Bio", "#Biography", null),
                new Category("Contact", "#Contact", null),
                new Category("News", "#News", null),
                new Category("Work", null, [new Category("I", "#Work", null), new Category("II", "#Work", null)]),
                new Category("Drawing","#Drawings", null),
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

