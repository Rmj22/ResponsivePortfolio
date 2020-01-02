$(document).ready(function(){
  
  Email.send({
    To : 'robinjones335@gmail.com',
    From : document.getElementById("#address"),
    Subject : "New Inquiry",
    Body : document.getElementById("#message"),
  }).then(
    message => alert(message)
  );
})