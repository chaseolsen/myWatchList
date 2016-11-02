angular.module('apiApp').service('mainSvc', function($http, $q) {

    // Less specific stock lookup
    //http://dev.markitondemand.com/MODApis/Api/v2/lookup/json?input=nvidia



    var stocks = [{
        id: 'amd'
    }, {
        id: 'nvda'
    }, ];


//TEST _____________________________________________
    this.lessSpecific = function(stockReq){
      return $http({
        method: 'GET',
        url: 'http://dev.markitondemand.com/MODApis/Api/v2/lookup/json?input=' + stockReq
      }).then(function(response){
        var stockSymbol = response.data[0].Symbol;
        // console.log(stockSymbol);

        $http({
            method: 'GET',
            url: 'http://www.google.com/finance/info?q=NASDAQ:' + stockSymbol
        }).then(function(response) {
            if (response.status === 200) {
                // console.log(response.data);
                var total = response.data.split("//");
                var newTotal = JSON.parse(total[1]);
                var symbol = newTotal[0];
                console.log(symbol);
                return symbol;
            }
            return "Something went wrong";
        });

      });
    };



//_______________________________________________


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

    this.removeData = function(stockToRemove){

      for(var i = 0; i < stocks.length; i++){
        if(stocks[i].id === stockToRemove){
          console.log(stockToRemove);
          stocks.splice(i--, 1);
        }
      }

    };
});
