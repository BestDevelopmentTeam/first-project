const open = document.querySelector('.open'),
    close = document.querySelector('.close'),
    list = document.querySelector('.nav_list_item_mobile')


open.addEventListener('click', () => {
    list.classList.toggle('active')
})
close.addEventListener('click', () => {
    list.classList.remove('active')
})