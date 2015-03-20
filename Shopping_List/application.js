$(document).ready(function(){
  $('#submit').on('click', function(){
    var entry = $('input').val();
    $('ul').append("<li>"+entry+"</li>");
  })
 $('#Empty').on('click', function(){
    var entry = $('input').val();
    $('ul').remove("li");
  })
  
});
