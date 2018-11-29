//Masonry 
function Masonry() {
  // init Masonry
  var $grid = $('.card-list').masonry({
    itemSelector: '.card-item',
    columnWidth: '.card-sizer',
    percentPosition: true,
    resize: true,
    transitionDuration: 0
  });
  // layout after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  }); 
  
}

//Run
$(document).ready(function () {
  Masonry()
});
