angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc) {


    $scope.getMyList = function() {
        $scope.stocks = mainSvc.getMyList();
    };

    $scope.getMyList();

//TEST_______________________________________
    $scope.lessSpecific = function(stockReq){
      
      mainSvc.lessSpecific(stockReq).then(function(response){
        $scope.stockReqData = response;
      });
    };
//___________________________________________

    $scope.getStockInfo = function(stock) {
        mainSvc.getStockInfo(stock).then(function(response) {
            $scope.stockData = response;
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

    $scope.deleteStock = function(stockToRemove){

      mainSvc.removeData(stockToRemove);
    };

});
