// declaration d une variable
let project__items =  $('.item__project'),
close__btn = $('.project .close');

project__items.hover(
    function() {
      let obj__project = $(this).data('link-card');

      $('.'+obj__project).css('z-index','999');
      $('.'+obj__project).addClass('js-animation-hover-project');
      $(this).addClass('hover-link');
      $('.item__project').not($( ".item__project.hover-link" )).addClass('hover-active-link');

    }, function() {
      let obj__project = $(this).data('link-card');
      $('.project').css('z-index','10');
      $('.'+obj__project).removeClass('js-animation-hover-project');
      
      $(this).removeClass('hover-link');
      $('.item__project').removeClass('hover-active-link');
    }
);

// Click on the project

  project__items.on('click', 
    function(){
      let obj__project = $(this).data('link-card');

      $('.project').removeClass('js-animation-click-project');
      $('.'+obj__project).addClass('js-animation-click-project');
      $('body').addClass('card-open');
      $('body').addClass('project-open');
  });
  
  close__btn.on('click', 
    function(){   
      $(this).closest('.project').removeClass('js-animation-click-project');
      $('body').removeClass('project-open');
    // $('.item__project').not(this).removeClass('js-click-none');
      $('body').removeClass('card-open');
  });

// Click outside

  $('body').on('click', function(e){

    if( $('body').hasClass("card-open") )
    {

      if($(e.target).closest('.container__projects').length === 0  &&  $('body').hasClass("card-open") && e.target.parentNode.className !== 'js-cards-show' )
      {
        $('body').find('.project.js-animation-click-project').removeClass('js-animation-click-project');
        $('body').removeClass('project-open');
      }
    }

  });

// Apparition de la page

window.addEventListener('load', function() {
  var overlay = document.getElementById('overlay');
  overlay.style.opacity = 0;
  setTimeout(function() {
    overlay.style.display = 'none';
  }, 1000); // temps de la transition en ms
});
