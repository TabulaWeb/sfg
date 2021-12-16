// бургер меню
document.querySelector('.burger-menu').addEventListener('click', function(){
    if(document.querySelector('.modal-menu').classList.contains('active')){
        document.querySelector('.modal-menu').classList.remove('active')
        document.querySelector('.burger-menu').classList.remove('active')
        document.querySelector('body').style.overflowY = 'auto'
    } else {
        document.querySelector('.modal-menu').classList.add('active')
        document.querySelector('.burger-menu').classList.add('active')
        document.querySelector('body').style.overflowY = 'hidden'
    }
})

// О компании выпадающий список
document.querySelector('.modal-menu__button').addEventListener('click', function(){
    if(document.querySelector('.modal-menu_list').classList.contains('active')){
        document.querySelector('.modal-menu_list').classList.remove('active')
        document.querySelector('.modal-menu__button img').style.transform = 'rotate(180deg)'
    } else {
        document.querySelector('.modal-menu_list').classList.add('active')
        document.querySelector('.modal-menu__button img').style.transform = 'rotate(360deg)'
    }
})