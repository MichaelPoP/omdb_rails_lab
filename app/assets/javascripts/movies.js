$(document).ready(function(){
  
  $("form").on("submit", function (event) {

    // Prevent the page from reloading.
    event.preventDefault();

    // Can either grab the search term through event.target or this.
    var term = this.searchTerm(keyword);
// console.log(this);
    // Call the OMDB API. {s: query} passes the query term as the "s"
    // parameter to the API. The third argument is a function that is
    // called when the request is successful.
    $.getJSON("/search", {keyword:term}, function (data) {
      // var $results = $("#results").empty();
      // console.log(data);
    
        // $results.html("No results found.");
      
        // data.Search.forEach(function (movie) {
        //   var li = $("<li></li>").text(movie.Title);
        //   $results.append(li);
        
        // });
      });
  });



}); 
