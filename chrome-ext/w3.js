$.ajax({
  url: 'http://localhost:3132/' + window.location.host.replace('www.', '') + '.js',
  dataType: 'text',
  success: function(d){
    $(function(){ eval(d); });
  },
  error: function(){
    console.log('no .w3 server found at localhost:3132');
  }
});

$.ajax({
  url: 'http://localhost:3132/' + window.location.host.replace('www.', '') + '.css',
  dataType: 'text',
  success: function(d){
    $('<style></style>').text(d).appendTo($("head"));
  },
  error: function(){
    console.log('no .w3 server found at localhost:3132');
  }
});
