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
