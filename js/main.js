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

  function disabled(){
let homePage = document.querySelector('.f-home-nav__home-page');
    fruitPage =  document.querySelector('.f-home-nav__fruit-page');

    grid = document.querySelector('.f-grid')
    list = document.querySelector('.f-list')

    homePage.addEventListener('click',()=>{
      homePage.classList.remove('disabled')
      fruitPage.classList.add('disabled')
    })

    fruitPage.addEventListener('click',()=>{
      fruitPage.classList.remove('disabled')
      homePage.classList.add('disabled')
    })

  grid.addEventListener('click',()=>{
    grid.classList.remove('disabled')
    list.classList.add('disabled')
  })
  list.addEventListener('click',()=>{
    list.classList.remove('disabled')
    grid.classList.add('disabled')
  })
  }
  disabled()
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


let favorite = document.querySelectorAll('.wish-list');

favorite.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('favorite')
  })
});





