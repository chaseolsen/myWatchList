angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc) {


    $scope.getMyList = function() {
        $scope.stocks = mainSvc.getMyList();
    };

    $scope.getMyList();



    $scope.getStockInfo = function(stock) {
      console.log(stock);
        mainSvc.getStockInfo(stock).then(function(response) {
            $scope.stockData = response;
            console.log($scope.stockData);
        });
    };

    $scope.addStock  = function(){
      var newStock = {
        id:$scope.newStockId
      };
      console.log(newStock);
      if(mainSvc.addStock(newStock)){
        $scope.newStockId = "";
      }
    };

});
