angular.module('apiApp').service('mainSvc', function($http, $q) {

    // Less specific stock lookup
    //http://dev.markitondemand.com/MODApis/Api/v2/lookup/json?input=nvidia



    var stocks = [{
        id: 'amd'
    }, {
        id: 'nvda'
    }, ];


    this.getMyList = function() {
        return stocks;
    };

    this.addStock = function(newStock){
      console.log(newStock);
      if(newStock.id){
        stocks.push(newStock);
      }
      return true;
    };



    this.getStockInfo = function(stock) {
        return $http({
            method: 'GET',
            url: 'http://www.google.com/finance/info?q=NASDAQ:' + stock
        }).then(function(response) {
            if (response.status === 200) {
                // console.log(response.data);
                var total = response.data.split("//");
                var newTotal = JSON.parse(total[1]);
                var symbol = newTotal[0];

                return symbol;
            }
            return "Something went wrong";
        });
    };
});
