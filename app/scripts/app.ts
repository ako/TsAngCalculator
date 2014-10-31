/// <reference path='_all.ts' />

/* test */

/**
 * @ngdoc overview
 * @name test3App
 * @description
 * # test3App
 *
 * Main module of the application.
 */
module test3App {
    "use strict";

    var test3App = angular.module("test3App", ["ui.router", "ionic"])
        .controller("calculatorCtrl", CalculatorCtrl);

    console.log("initialized test3App: " + test3App);
    test3App.config( function($stateProvider, $urlRouterProvider) {
       $stateProvider
           .state("home", {url: "/home", templateUrl: "views/home.html" })
           .state("reverse-polish", { url: "/calculator/reverse-polish",
               views: {"menuContent@" : {templateUrl: "views/reversepolish.html"}}} )
           .state("basic", { url: "/calculator/basic",
               views: {"menuContent" : {templateUrl: "views/basic.html"}}} )
           .state("scientific", { url: "/calculator/scientific",
               views: {"menuContent" : {templateUrl: "views/scientific.html"}}} )
           .state("wolfram", { url: "/calculator/wolfram",
               views: {"menuContent" : {templateUrl: "views/wolfram.html"}}} )
           .state("wind", { url: "/calculator/wind",
               views: {"menuContent" : {templateUrl: "views/wind.html"}}} )
       ;
        $urlRouterProvider.otherwise("/home");
    } );
}
