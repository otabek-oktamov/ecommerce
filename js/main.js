document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.burger').classList.toggle('clicked')
  document.querySelector('.site-header').classList.toggle('active')
  document.querySelector('.site-header__form').classList.toggle('df')
  document.querySelector('.site-header__top').classList.toggle('db')
  document.querySelector('.site-header__bottom').classList.toggle('db')
  document.body.classList.toggle('scroll')
  document.querySelector('.search-btn').addEventListener('click', () => {
    document.querySelector('.search-btn').classList.toggle('close')
    document.querySelector('.search').classList.toggle('db')
    document.querySelector('.site-header__select-menu').classList.toggle('dn')
    document.querySelector('.user').classList.toggle('dn')
  })
})

document.querySelector('.f-home-nav__home-page').addEventListener('click', () => {
  document.querySelector('.f-home-nav__home-page').classList.remove('disabled')
  document.querySelector('.f-home-nav__fruit-page').classList.add('disabled')
})
document.querySelector('.f-home-nav__fruit-page').addEventListener('click', () => {
  document.querySelector('.f-home-nav__fruit-page').classList.remove('disabled')
  document.querySelector('.f-home-nav__home-page').classList.add('disabled')
})
document.querySelector('.f-grid').addEventListener('click', () => {
  document.querySelector('.f-grid').classList.remove('disabled')
  document.querySelector('.f-list').classList.add('disabled')
})
document.querySelector('.f-list').addEventListener('click', () => {
  document.querySelector('.f-list').classList.remove('disabled')
  document.querySelector('.f-grid').classList.add('disabled')
})
$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});