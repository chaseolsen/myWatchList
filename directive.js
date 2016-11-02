angular.module('apiApp').directive('myWidget', function(){

  return {
    restrict: 'E',
    template: '<script type="text/javascript"> new TradingView.widget({"width": 580,"height": 310,"symbol": "NASDAQ:AAPL","interval": "D","timezone": "Etc/UTC","theme": "White","style": "1","locale": "en","toolbar_bg": "rgba(241, 243, 246, 1)","enable_publishing": false,"hide_top_toolbar": true,"allow_symbol_change": true,"save_image": false,"hideideas": true});</script>',
  };

});
