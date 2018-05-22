
$(document).ready(function() {
  $('#address-table').dynatable({
    dataset: {
      ajax: true,
      ajaxUrl: 'http://localhost:8080/rmdw-1.0.0-beta/extrarest/v1.0.0/rmdw/assets/UserEntity',
      ajaxonLoad: true,
      records: [],
    },
    features: {
      paginate: true,
      search: true,
      sort: true,
      multisort: true
    },
    params: {
      queryRecordCount: 'totalElements',
      records: 'elements',
      perPage: 'size'
    },
    inputs: {
      processingText: '<div class="processing"><img src="img/loading.gif" /></div>'
    }
  });
});
