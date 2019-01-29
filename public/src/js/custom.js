(function($) {

  $.ajax({
    type: 'GET',
    url: 'https://wakatime.com/share/@540f0dd6-7f2d-46d6-817d-0fe1ca620988/49b793ff-5d41-4a54-8c7c-614a32f80008.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response.data);
    },
  });
    
  
})(jQuery);
