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

// Плавный скролл


// Инициализируем анимации
AOS.init();