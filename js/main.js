window.addEventListener('DOMContentLoaded', () => {
  function mobileNav() {
    let burgerBtn = document.querySelector('.burger')
        siteHeader = document.querySelector('.site-header')
        siteHeaderForm = document.querySelector('.site-header__form')
        siteHeaderTop = document.querySelector('.site-header__top')
        siteHeaderBottom = document.querySelector('.site-header__bottom')
        searchBtn = document.querySelector('.search-btn')

        burgerBtn.addEventListener('click',()=>{
          burgerBtn.classList.toggle('clicked')
          siteHeader.classList.toggle('active')
          siteHeaderForm.classList.toggle('df')
          siteHeaderTop.classList.toggle('db')
          siteHeaderBottom.classList.toggle('db')
          document.body.classList.toggle('scroll')


          searchBtn.addEventListener('click',()=>{
            searchBtn.classList.toggle('close')
            document.querySelector('.search').classList.toggle('db')
            document.querySelector('.site-header__select-menu').classList.toggle('dn')
            document.querySelector('.user').classList.toggle('dn')
          })
        })

  }
  mobileNav()

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









window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  document.querySelector('.fixed-btn').style.display='flex'
  } else {
    document.querySelector('.fixed-btn').style.display='none'
  }
}


