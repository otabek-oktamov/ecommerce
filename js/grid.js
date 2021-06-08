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
        document.querySelector('.products-cards').classList.remove('hidden')
        document.querySelector('.categories-cards').classList.add('hidden')
      })
      list.addEventListener('click',()=>{
        list.classList.remove('disabled')
        grid.classList.add('disabled')
        document.querySelector('.categories-cards').classList.remove('hidden')
        document.querySelector('.products-cards').classList.add('hidden')
      })
      }
      disabled()


      let favorite = document.querySelectorAll('.wish-list');

favorite.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('favorite')
  })
});





let min = 1;
let max = 100;

const calcLeftPosition = (value) => (100 / (100 - 10)) * (value - 10);

$("#rangeMin").on("input", function (e) {
  const newValue = parseInt(e.target.value);
  if (newValue > max) return;
  min = newValue;
  $("#thumbMin").css("left", calcLeftPosition(newValue) + "%");
  $("#min").html(newValue);
  $("#line").css({
    left: calcLeftPosition(newValue) + "%",
    right: 100 - calcLeftPosition(max) + "%"
  });
});

$("#rangeMax").on("input", function (e) {
  const newValue = parseInt(e.target.value);
  if (newValue < min) return;
  max = newValue;
  $("#thumbMax").css("left", calcLeftPosition(newValue) + "%");
  $("#max").html(newValue);
  $("#line").css({
    left: calcLeftPosition(min) + "%",
    right: 100 - calcLeftPosition(newValue) + "%"
  });
});



