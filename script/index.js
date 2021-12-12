// Счетчик достижений
let setValue = function(elem, value, inc, shift, speed){
    var interval = false; 
    if (inc) {
        interval = setInterval(function(){
            if (elem.innerHTML*1+shift >= value) {
                elem.innerHTML = value;
                clearInterval(interval);
            } else {
                elem.innerHTML = elem.innerHTML*1+shift;
            }
        }, speed);
    } else {
        interval = setInterval(function(){
            if (elem.innerHTML*1-shift <= value) {
                elem.innerHTML = value;
                clearInterval(interval);
            } else {
                elem.innerHTML = elem.innerHTML*1-shift;
            }
        }, speed);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    setValue(oneCount, 3105, true, 10 , 1)

    setValue(twoCount, 15, true, 1 , 100)

    setValue(threeCount, 10, true, 1 , 100)
});

// Контент секции about
class About {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    business() {
        let button = document.querySelector('#listState li[data-action="business"]')
        if(!button.classList.contains('active')){
            document.querySelectorAll('#listState li').forEach(elem => {
                elem.classList.remove('active')
            })
            button.classList.add('active')
            
            document.querySelectorAll('.about-content__right-element').forEach(elem => {
                elem.classList.remove('active')
            })
            lineBusiness.classList.add('active')

            document.querySelector('.about-content__images').classList.add('active')
        }
    }

    license() {
        let button = document.querySelector('#listState li[data-action="license"]')
        if(!button.classList.contains('active')){
            document.querySelectorAll('#listState li').forEach(elem => {
                elem.classList.remove('active')
            })
            button.classList.add('active')

            document.querySelectorAll('.about-content__right-element').forEach(elem => {
                elem.classList.remove('active')
            })
            license.classList.add('active')

            document.querySelector('.about-content__images').classList.remove('active')
        }
    }

    warden() {
        let button = document.querySelector('#listState li[data-action="warden"]')
        if(!button.classList.contains('active')){
            document.querySelectorAll('#listState li').forEach(elem => {
                elem.classList.remove('active')
            })
            button.classList.add('active')

            document.querySelectorAll('.about-content__right-element').forEach(elem => {
                elem.classList.remove('active')
            })
            warden.classList.add('active')

            document.querySelector('.about-content__images').classList.remove('active')
        }
    }

    vacancies() {
        let button = document.querySelector('#listState li[data-action="vacancies"]')
        if(!button.classList.contains('active')){
            document.querySelectorAll('#listState li').forEach(elem => {
                elem.classList.remove('active')
            })
            button.classList.add('active')

            document.querySelectorAll('.about-content__right-element').forEach(elem => {
                elem.classList.remove('active')
            })
            vacancies.classList.add('active')

            document.querySelector('.about-content__images').classList.remove('active')
        }
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
          this[action]();
        }
    }
}

new About(listState);


// Активация модального окна лицензий
document.querySelectorAll('.license-item__img button').forEach(el => {
    el.addEventListener('click', function(){
        document.querySelector('.modal-license').classList.add('active')
        document.querySelector('body').style.overflowY = 'hidden'
    })
})

// Закрытие модального окна
document.querySelector('.modal-license').addEventListener('click', function(e){
    if(e.target.closest('.close-modal')){
        document.querySelector('.modal-license').classList.remove('active')
        document.querySelector('body').style.overflowY = 'auto'
    }
    if(e.target.classList.contains('active')){
        document.querySelector('.modal-license').classList.remove('active')
        document.querySelector('body').style.overflowY = 'auto'
    }
})

// Горизонтальное движение текста
console.log(document.querySelector('.services-content__img img'))
window.onscroll = () => {
    let pos = window.scrollY - 2219;
    console.log(pos)
    document.querySelector('.services-content__img img').style.right = `${pos/9}px`
}

// Инициализируем анимации
AOS.init();