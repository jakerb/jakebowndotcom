(function($) {

  $.ajax({
    type: 'GET',
    url: 'https://wakatime.com/share/@540f0dd6-7f2d-46d6-817d-0fe1ca620988/49b793ff-5d41-4a54-8c7c-614a32f80008.json',
    dataType: 'jsonp',
    success: function(response) {
      if(typeof response.data == 'object') {
        var target = '.uk-activity-p';
        var target_div = '.uk-activity';
        var str = 'Over the past 7 days I have used ';
        for (var i = response.data.length - 1; i >= 0; i--) {
          var data = response.data[i];
          str += (!i ? ' and ' : '') + data.name.toLowerCase() + " " + data.percent + "%" + (!i ? '' : ', ');
        }
        str += '. Data is provided via the <a href="https://wakatime.com/developers">Wakatime API</a>.';
        $(target).html(str);
        $(target_div).removeClass('uk-hidden');
      }
      
      
    },
  });
    
  
})(jQuery);
