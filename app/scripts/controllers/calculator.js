var test3App;
(function (test3App) {
    "use strict";

    var CalculatorCtrl = (function () {
        function CalculatorCtrl($scope) {
            this.$scope = $scope;
            $scope.valA = 0;
            $scope.values = [
                { value: new Big(0), operation: "" }
            ];
            $scope.add = function () {
                var newVal = { value: new Big($scope.valA), operation: "+" };
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[1].value.plus($scope.values[0].value);
                $scope.values.unshift({ value: resultValBig, operation: "=" });
            };
            $scope.sub = function () {
                var newVal = { value: new Big($scope.valA), operation: "-" };
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[1].value.minus($scope.values[0].value);
                $scope.values.unshift({ value: resultValBig, operation: "=" });
            };
            $scope.div = function () {
                var newVal = { value: new Big($scope.valA), operation: "/" };
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[1].value.div($scope.values[0].value);
                $scope.values.unshift({ value: resultValBig, operation: "=" });
            };
            $scope.times = function () {
                var newVal = { value: new Big($scope.valA), operation: "*" };
                $scope.values.unshift(newVal);
                var resultValBig = $scope.values[1].value.times($scope.values[0].value);
                $scope.values.unshift({ value: resultValBig, operation: "=" });
            };
            $scope.clear = function () {
                var newVal = { value: new Big(0), operation: "C" };
                $scope.values.unshift(newVal);
            };
        }
        CalculatorCtrl.$inject = [
            "$scope"
        ];
        return CalculatorCtrl;
    })();
    test3App.CalculatorCtrl = CalculatorCtrl;
})(test3App || (test3App = {}));
//# sourceMappingURL=calculator.js.map
