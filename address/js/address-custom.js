$(document).ready(function() {
  $('#address-table').dynatable({
    dataset: {
      ajax: true,
      ajaxUrl: 'http://10.3.56.48:8080/rmdw-1.0.0-beta/extrarest/v1.0.0/rmdw/assets/UserEntity',
      ajaxOnLoad: true,
      records: []
    },
    features: {
      paginate: true,
      search: true
    },
    params: {
      queryRecordCount: 'totalElements',
      records: 'elements',
      perPage: 'pageSize'
    }
  });
});
