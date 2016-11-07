angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc) {


    $scope.getMyList = function() {
        $scope.stocks = mainSvc.getMyList();
    };

    $scope.getMyList();
    

    //_________Goes through lessSpecific and returns that stock data____________
    $scope.lessSpecific = function(stockReq) {

        mainSvc.lessSpecific(stockReq).then(function(response) {
            $scope.stockReqData = response;

            $scope.difCheck = response.c;

            if($scope.difCheck > 0){
              $(".openDiff").css('color', 'green');
            } else {
              $(".openDiff").css('color', 'red');
            }

        });
    };



    $scope.addStock = function() {
        var newStock = {
            id: $scope.newStockId
        };
        console.log(newStock);
        if (mainSvc.addStock(newStock)) {
            $scope.newStockId = "";
        }
    };

    $scope.deleteStock = function(stockToRemove) {

        mainSvc.removeData(stockToRemove);
    };

});
