document.querySelector('.burger').addEventListener('click',()=>{
document.querySelector('.burger').classList.toggle('clicked')
document.querySelector('.site-header').classList.toggle('active')
document.querySelector('.site-header__form').classList.toggle('df')
document.querySelector('.site-header__top').classList.toggle('db')
document.querySelector('.site-header__bottom').classList.toggle('db')
document.body.classList.toggle('scroll')
document.querySelector('.search-btn').addEventListener('click',()=>{
  document.querySelector('.search-btn').classList.toggle('close')
  document.querySelector('.search').classList.toggle('db')
  document.querySelector('.site-header__select-menu').classList.toggle('dn')
  document.querySelector('.user').classList.toggle('dn')
})
})

$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});