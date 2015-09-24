console.log("algolia script");


function searchCallback(success, content) {
    console.log(JSON.stringify(content));
  };

  $(document).ready(function() {
    var algolia = new AlgoliaSearch('E4MMGYJF7T', 'd0ec88bf3074f5c26730541a7888d84a');
    var index = algolia.initIndex('getstarted_actors');

    $("input").keyup(function() {
      index.search($("input").val(), searchCallback, {
        hitsPerPage: 10,
        facets: '*'
      });
    }).focus();
  });

  