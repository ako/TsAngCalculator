/// <reference path='../_all.ts' />
module test3App {
    "use strict";

    export interface ICalculatorScope extends ng.IScope {
        valA: string;
        values: ICalcValue[];
        add: () => void;
        sub: () => void;
        div: () => void;
        times: () => void;
        clear: () => void;
        keyPressed: (string) => void;
        percentage: () => void;
        negate: () => void;
    }

    export class CalculatorCtrl {
        public static $inject = [
            "$scope"
        ];

        constructor(private $scope: ICalculatorScope) {
            $scope.valA = "0";
            $scope.values = [
                {value: new Big(0), operation: ""}
            ];
            $scope.percentage = function() {
                console.log("percentage");
            };
            $scope.negate = function () {
                console.log("negate");
            };
            $scope.add = function () {
                var newVal = {value: new Big($scope.valA), operation: "+"};
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[1].value.plus($scope.values[0].value);
                $scope.values.unshift({value: resultValBig, operation: "="});
                $scope.valA = "0";
            };
            $scope.sub = function () {
                var newVal = {value: new Big($scope.valA), operation: "-"};
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[1].value.minus($scope.values[0].value);
                $scope.values.unshift({value: resultValBig, operation: "="});
                $scope.valA = "0";
            };
            $scope.div = function () {
                var newVal = {value: new Big($scope.valA), operation: "/"};
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[1].value.div($scope.values[0].value);
                $scope.values.unshift({value: resultValBig, operation: "="});
                $scope.valA = "0";
            };
            $scope.times = function () {
                var newVal = {value: new Big($scope.valA), operation: "*"};
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[1].value.times($scope.values[0].value);
                $scope.values.unshift({value: resultValBig, operation: "="});
                $scope.valA = "0";
            };
            $scope.clear = function () {
                console.log("clear");
                var newVal = {value: new Big(0), operation: "C"};
                $scope.values.unshift(newVal);
            };
            $scope.keyPressed = function (key: string) {
                console.log("keyPressed: " + key);
                $scope.valA = $scope.valA + key;
            };
        }
    }
}
