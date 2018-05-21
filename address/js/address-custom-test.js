$('$(document').ready(function() {
$.ajax({
  url: 'http://localhost:8080/restclient/address/json/anamgr-test.json',
  success: function(data){
    $('#address-table').dynatable({
      dataset: {
        records: data
      }
    });
  }
});
});
