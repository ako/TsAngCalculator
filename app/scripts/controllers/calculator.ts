/// <reference path='../_all.ts' />
module test3App {
    "use strict";

    export interface ICalculatorScope extends ng.IScope {
        valA: number;
        values: ICalcValue[];
        add: () => void;
        sub: () => void;
        div: () => void;
        times: () => void;
        clear: () => void;

    }

    export class CalculatorCtrl {
        public static $inject = [
            "$scope"
        ];

        constructor(private $scope: ICalculatorScope) {
            $scope.valA = 0;
            $scope.values = [
                {value: new Big(0), operation: ""}
            ];
            $scope.add = function () {
                var newVal = {value: new Big($scope.valA), operation: "+"};
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[0].value.plus($scope.values[1].value);
                $scope.values.unshift({value: resultValBig, operation: "="});
            };
            $scope.sub = function () {
                var newVal = {value: new Big($scope.valA), operation: "-"};
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[0].value.minus($scope.values[1].value);
                $scope.values.unshift({value: resultValBig, operation: "="});
            };
            $scope.div = function () {
                var newVal = {value: new Big($scope.valA), operation: "/"};
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[0].value.div($scope.values[1].value);
                $scope.values.unshift({value: resultValBig, operation: "="});
            };
            $scope.times = function () {
                var newVal = {value: new Big($scope.valA), operation: "*"};
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[0].value.times($scope.values[1].value);
                $scope.values.unshift({value: resultValBig, operation: "="});
            };
            $scope.clear = function () {
                var newVal = {value: new Big(0), operation: "C"};
                $scope.values.unshift(newVal);
            };
        }
    }
}
