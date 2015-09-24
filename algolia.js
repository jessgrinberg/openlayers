console.log("algolia script");


// function searchCallback(success, content) {
//     console.log(JSON.stringify(content));
//   };

    function searchCallback(success, content) {
    	console.log(JSON.stringify(content));
      $('#users').empty();

      for (var i = 0; i < content.hits.length; i++) {
        $('#users').append('<li>' + content.hits[i].brandID + " , " +content.hits[i].objectID  + " ," +content.hits[i]._geoloc.lat  + " , " +content.hits[i]._geoloc.lng + '</li>');
      }
    };

  $(document).ready(function() {
    var algolia = new AlgoliaSearch('E4MMGYJF7T', 'd0ec88bf3074f5c26730541a7888d84a');
    var index = algolia.initIndex('test_NAME');

    $("input").keyup(function() {
      index.search($("input").val(), searchCallback, {
        hitsPerPage: 10,
        facets: '*'
      });
    }).focus();
  });

