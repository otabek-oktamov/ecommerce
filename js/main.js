document.querySelector('.burger').addEventListener('click',()=>{
document.querySelector('.burger').classList.toggle('clicked')
document.querySelector('.site-header').classList.toggle('active')
document.querySelector('.site-header__form').classList.toggle('df')
document.querySelector('.site-header__top').classList.toggle('db')
document.querySelector('.site-header__bottom').classList.toggle('db')
})

var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
  });
