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
    var test3App = angular.module("test3App", ["ionic"])
        .controller("calculatorCtrl", CalculatorCtrl);
    console.log("initialized test3App: " + test3App);
}
