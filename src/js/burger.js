// Відкриття та закриття вспливаючого мобільного меню:

let menuBtn = document.querySelector('.burger-btn');
let menu = document.querySelector('.header-popup-menu');
menuBtn.addEventListener('click', function(){
	menu.classList.add('is-open');
})
let closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function(){
	menu.classList.remove('is-open');
})