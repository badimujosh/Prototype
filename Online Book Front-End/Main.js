/// <reference path="C:\Users\Badimu.Kazadi\Documents\Visual Studio 2015\Projects\Online Book Store Front-End\Online Book Front-End\Online Book Front-End\scripts/angular.js" />


var myApp = angular.module("myApp", ['ngRoute', 'Services']);

myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.


            when('/Home', {
                templateUrl: 'View/Home.html',
                controller: 'HomeController'
            }).
            when('/Register', {
                templateUrl: 'View/Register.html',
                controller: 'SignUpController'
            }).
            when('/LogIn', {
                templateUrl: 'View/Login.html',
                controller: 'LogInController'
            }).

            when('/Profile',
            {
                templateUrl: 'View/Profile.html',
                controller: 'UpdateProfileController'
            }).

            when('/Book',
            {
                templateUrl: 'View/Property.html',
                controller: 'BookController'
            }). /*
            when('/Upload',
            {
                templateUrl: 'View/UploadImage.html',
                controller: 'ImageController'
            }).
            */
            otherwise({ redirectTo: '/Home' });
    }


]);