var test3App;
(function (_test3App) {
    "use strict";

    var test3App = angular.module("test3App", ["ui.router", "ionic"]).controller("calculatorCtrl", _test3App.CalculatorCtrl);

    console.log("initialized test3App: " + test3App);
    test3App.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("home", { url: "/home", templateUrl: "views/home.html" }).state("reverse-polish", {
            url: "/calculator/reverse-polish",
            views: { "menuContent@": { templateUrl: "views/reversepolish.html" } } }).state("basic", {
            url: "/calculator/basic",
            views: { "menuContent": { templateUrl: "views/basic.html" } } }).state("scientific", {
            url: "/calculator/scientific",
            views: { "menuContent": { templateUrl: "views/scientific.html" } } }).state("wolfram", {
            url: "/calculator/wolfram",
            views: { "menuContent": { templateUrl: "views/wolfram.html" } } }).state("wind", {
            url: "/calculator/wind",
            views: { "menuContent": { templateUrl: "views/wind.html" } } });
        $urlRouterProvider.otherwise("/home");
    });
})(test3App || (test3App = {}));
//# sourceMappingURL=app.js.map
