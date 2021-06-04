let des = document.querySelector('.description')
    rew = document.querySelector('.rewiev')
    que = document.querySelector('.question')
    desBtn = document.querySelector('.descriptions')
    rewBtn = document.querySelector('.reviews')
    queBtn = document.querySelector('.questions')

   desBtn.addEventListener('click',()=>{
       des.classList.remove('hidden')
       rew.classList.add('hidden')
       que.classList.add('hidden')

       desBtn.classList.add('active-item')
       rewBtn.classList.remove('active-item')
       queBtn.classList.remove('active-item')
   })

   rewBtn.addEventListener('click',()=>{
    rew.classList.remove('hidden')
    des.classList.add('hidden')
    que.classList.add('hidden')

    rewBtn.classList.add('active-item')
    desBtn.classList.remove('active-item')
    queBtn.classList.remove('active-item')
})

queBtn.addEventListener('click',()=>{
    que.classList.remove('hidden')
    rew.classList.add('hidden')
    des.classList.add('hidden')

    queBtn.classList.add('active-item')
    rewBtn.classList.remove('active-item')
    desBtn.classList.remove('active-item')
})