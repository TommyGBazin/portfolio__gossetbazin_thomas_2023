// declaration d une variable
let projectitems =  $('.item__project'),
closebtn = $('.project .close');

projectitems.hover(
  function() {
    let objproject = $(this).data('link-card');
    $('.'+objproject).css('z-index','999');
    $('.'+objproject).addClass('js-animation-hover-project');
    
    
  }, function() {
    let objproject = $(this).data('link-card');
    $('.project').css('z-index','10');
    $('.'+objproject).removeClass('js-animation-hover-project');
  }
  );
  
  projectitems.on('click', function(){
    let objproject = $(this).data('link-card'),
    itemwithclass = $('.project.js-animation-click-project');
    
    if( $(itemwithclass).lenght > 0 )
    {
      $( itemwithclass ).animate({
        transform: "translateY(66%) rotate(19deg)",
        opacity:0
      }, 100000, function() {
        // Animation complete.
        $('.project').removeClass('js-animation-click-project');
        
        // animation de la card avec apparition d en bas
        $('.'+objproject).addClass('js-animation-click-project');
        
      });
    }
    else
    {
      $('.project').removeClass('js-animation-click-project');
      $('.'+objproject).addClass('js-animation-click-project');
    }
    
  });
  
  closebtn.on('click', function(){
    $(this).closest('.project').removeClass('js-animation-click-project');
    
    $('.item__project').not(this).removeClass('js-click-none');
  });
  
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
  
  project__items.on('click', function(){
    let obj__project = $(this).data('link-card');

      $('.project').removeClass('js-animation-click-project');
      $('.'+obj__project).addClass('js-animation-click-project');
      $('body').addClass('card-open');

  });
  
  close__btn.on('click', function(){   
    $(this).closest('.project').removeClass('js-animation-click-project');
    
    // $('.item__project').not(this).removeClass('js-click-none');
    $('body').removeClass('card-open');
  });


  $('body').on('click', function(e){

    if( $('body').hasClass("card-open") )
    {

      if($(e.target).closest('.container__projects').length === 0  &&  $('body').hasClass("card-open") && e.target.parentNode.className !== 'js-cards-show' )
      {
        $('body').find('.project.js-animation-click-project').removeClass('js-animation-click-project');
      }
    }

  });
  
          // cursor custom

  var cursor = document.querySelector('.cursor');
  var cursorinner = document.querySelector('.cursor2');
  var a = document.querySelectorAll('a');
  
  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  });
  
  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
  });
  
  document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
  });
  
  document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
  });
  
  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });

  document.body.style.cursor = 'none'
    document.body.querySelectorAll("button, label, input, textarea, select, a").forEach((el) => {
      el.style.cursor = 'inherit'
    })