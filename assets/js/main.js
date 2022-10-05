// declaration d une variable
let project__items =  $('.item__project'),
close__btn = $('.project .close');

project__items.hover(
  function() {
    let obj__project = $(this).data('link-card');
    $('.'+obj__project).addClass('js-animation-hover-project');
  }, function() {
    let obj__project = $(this).data('link-card');
    $('.'+obj__project).removeClass('js-animation-hover-project');
  }
  );
  
  project__items.on('click', function(){
    let obj__project = $(this).data('link-card');
    
    $('.project').removeClass('js-animation-click-project');
    
    // animation de la card avec apparition d en bas
    $('.'+obj__project).addClass('js-animation-click-project');
    
  });
  
  close__btn.on('click', function(){   
    $(this).closest('.project').removeClass('js-animation-click-project');
    
    $('.item__project').not(this).removeClass('js-click-none');
  });
  
