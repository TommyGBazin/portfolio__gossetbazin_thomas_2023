// declaration d une variable
let project__items = $('.item__project'),
    close__btn = $('.project .close');

// Click on the project
project__items.on('click', function(){
  let obj__project = $(this).data('link-card');
  $('.project').removeClass('js-animation-click-project');
  $('.'+obj__project).addClass('js-animation-click-project');
  $('body').addClass('project-open');
});

close__btn.on('click', function(){   
  $(this).closest('.project').removeClass('js-animation-click-project');
  $('body').removeClass('project-open');
});

// Click outside
$('body').on('click', function(e){
  if($('body').hasClass("project-open")) {
    if($(e.target).closest('.container__projects').length === 0 && e.target.parentNode.className !== 'js-cards-show') {
      $('.project.js-animation-click-project').removeClass('js-animation-click-project');
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

// Animation Job

const textArray = ["Designer UI UX", "Directeur Artistique", "Développeur Front-End", "Chef de Projet"];
let index = 0;
const loopText = document.querySelector(".loop__text");

setInterval(function() {
  loopText.innerHTML = textArray[index];
  index++;
  if (index === textArray.length) {
    index = 0;
  }
}, 2000);

const words = ["Designer UI UX", "Directeur Artistique", "Développeur Front-End", "Chef de Projet"];
const colors = ['#fff', '#fff', '#FFf'];

let i = 0;
const loop = () => {
  const word = words[i];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const $text = $('.loop__text');
  $text.css('color', color);
  $text.text(word);
  i = (i + 1) % words.length;
  setTimeout(loop, 2000);
};

loop();

