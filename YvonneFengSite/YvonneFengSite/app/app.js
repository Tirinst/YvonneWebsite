var AngularDefinition;
(function (AngularDefinition) {
    'use strict';
    var app = angular.module('YvonnesArt', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])
        .directive('resize', [function ($window) {
            return function (scope, element) {
                scope.getWindowDimensions = function () {
                    return {
                        'h': $window.innerHeight,
                        'w': $window.innerWidth
                    };
                };
                scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
                    scope.windowHeight = newValue.h;
                    scope.windowWidth = newValue.w;
                    scope.style = function () {
                        return {
                            'height': (newValue.h - 100) + 'px',
                            'width': (newValue.w - 100) + 'px'
                        };
                    };
                }, true);
                var w = angular.element($window);
                w.bind('resize', function () {
                    scope.$apply();
                });
            };
        }])
        .controller('biographyController', Biography.Controller)
        .controller('homeController', Home.Controller)
        .controller('newsController', News.Controller)
        .controller('navBarController', NavBar.Controller)
        .controller('textController', TextPage.Controller)
        .controller('contactController', Contact.Controller)
        .controller('imageController', Images.Controller)
        .config(function ($routeProvider) {
        $routeProvider.when('', {
            templateUrl: 'app/Home/Home.html',
            controller: 'homeController'
        }).when('/', {
            templateUrl: 'app/Home/Home.html',
            controller: 'homeController'
        }).when('/Home', {
            templateUrl: 'app/Home/Home.html',
            controller: 'homeController'
        }).when('/Biography', {
            templateUrl: 'app/Biography/Biography.html',
            controller: 'biographyController'
        }).when('/News', {
            templateUrl: 'app/News/News.html',
            controller: 'newsController'
        }).when('/Contact', {
            templateUrl: 'app/Contact/Contact.html',
            controller: 'contactController'
        }).when('/Publications', {
            templateUrl: 'app/Text/Text.html',
            controller: 'textController'
        }).when('/Collections', {
            templateUrl: 'app/Images/Images.html',
            controller: 'imageController'
        }).when('/Collections/:collectionName', {
            templateUrl: 'app/Images/Images.html',
            controller: 'imageController'
        }).when('/Collections/:collectionName/:imageId', {
            templateUrl: 'app/Images/Images.html',
            controller: 'imageController'
        }).otherwise('/Home');
    });
})(AngularDefinition || (AngularDefinition = {}));
document.title = "Yvonne Feng";
