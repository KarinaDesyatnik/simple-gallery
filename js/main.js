// ------ start popup init---
 $('.popup-with-video').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: '#name',
  callbacks: {
   beforeOpen: function() {
    if($(window).width() < 700) {
     this.st.focus = false;
   } else {
     this.st.focus = '#name';
   }
 }
}
});
 // ------ end popup init---

 if( window.innerWidth <= 768 ){
  $('h1, .movie_container').unwrap();

}

$('.play').click(function(){
    $('.over').toggleClass('active');
    
  })

//-----stat clipboared-------//
  jQuery(document).ready(function($){
$('#faq1').click(function(){
history.pushState('', document.title, window.location.pathname);    
var url = document.location.href + $(this).attr('href');
new Clipboard('.copy_link', {text: function(){
 return url;
}});
});
$('.copy_link').click(function(){ 
  history.pushState('', document.title, window.location.pathname);
var url = document.location.href + $(this).attr('href');
new Clipboard('.copy_link', {text: function(){
 return url;
}});
});
});
//-----end clipboared-------//

$(document).on('click', '.play', function() {
  var $video = $('#video'),
    src = $video.attr('src');
 
  $video.attr('src', src + '&autoplay=1');
});