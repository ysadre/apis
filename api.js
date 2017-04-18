var url = "https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=FinjGw4gTsULHG5PCJLxifZNTfq8UPKPKI0UhO6M";


$.ajax({
  url: url,
  success: function(result){
  $("#date").text(result.date);
  $("#url").text(result.url);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
}
});

