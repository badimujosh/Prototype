/// <reference path="C:\Users\Badimu.Kazadi\Documents\Visual Studio 2015\Projects\Prototype V0.1\Prototype V0.1\Prototype V0.1\scripts/angular.js" />


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
                controller: 'UserController'
            }).
            when('/LogIn', {
                templateUrl: 'View/Login.html',
                controller: 'LogInController'
            }).
            when('/Become Partner',
            {
                templateUrl: 'View/Partner.html',
                controller: 'PartnerController'
            }).

            when('/Profile',
            {
                templateUrl: 'View/Profile.html',
                controller: 'UpdateProfileController'
            }).

            when('/Service',
            {
                templateUrl: 'View/Service.html',
                controller: 'ServiceController'
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