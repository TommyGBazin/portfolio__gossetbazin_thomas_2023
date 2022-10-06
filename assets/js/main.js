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