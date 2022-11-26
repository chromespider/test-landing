// Preventing the mobile keyboard view break

addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})



// Scrolling to order section

const orderButtonList = document.querySelectorAll('.orderbutton');
const orderSection = document.querySelector('.order');

for (i = 0; i < orderButtonList.length; i++) {
    const orderButton = orderButtonList[i];
    orderButton.addEventListener('click', (e) => {
        orderSection.scrollIntoView({behavior: 'smooth'});
    })
};

// Reviews swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

// Timer

let time = 30 * 60; // 30 minutes converted to seconds
const timerElement = document.querySelector('.timer');
const decrease = () => {
    if (time > 0) {
        time--;
    } else {
        time = 0;
    }
    let minutes = ~~(time / 60);
    let seconds = time % 60;
    if ((minutes < 10) && (seconds < 10)) {
        timerElement.innerHTML = `0${minutes}:0${seconds}`;
    } else if (minutes < 10) {
        timerElement.innerHTML = `0${minutes}:${seconds}`;
    } else if (seconds < 10) {
        timerElement.innerHTML = `${minutes}:0${seconds}`;
    } else {
        timerElement.innerHTML = `${minutes}:${seconds}`;
    }
};

window.onload = () => {
    setInterval(decrease, 1000);
};

// Order form logic

const nameInput = document.querySelector('.name');
const numberInput = document.querySelector('.number');
const nameHint = document.querySelector('.namehint');
const numberHint = document.querySelector('.numberhint');
const submitInput = document.querySelector('.submit');

nameInput.addEventListener('focus', (e) => {
    nameHint.classList.add('visible');
});

nameInput.addEventListener('blur', (e) => {
    nameHint.classList.remove('visible');
});

numberInput.addEventListener('focus', (e) => {
    numberHint.classList.add('visible');
});

numberInput.addEventListener('blur', (e) => {
    numberHint.classList.remove('visible');
});

submitInput.addEventListener('click', (e) => {
    if ((nameInput.value !== '') && (numberInput.value !== '')) {
        nameInput.value = '';
        numberInput.value = '';
        alert('Ваш заказ оформлен!');
    } else {
        alert('Пожалуйста, заполните все поля');
    }
});