$(document).ready(function() {
  $('#address-table').dynatable({
    dataset: {
      ajax: true,
      ajaxUrl: 'http://localhost:8080/restclient/address/json/anamgr-test.json',
      ajaxOnLoad: true,
      records: []
    }
  });
});
