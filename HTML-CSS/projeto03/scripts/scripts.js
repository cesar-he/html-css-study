
const myObserver = new IntersectionObserver((tomato) => {
    tomato.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

const myObserver2 = new IntersectionObserver((orange) => {
    orange.forEach((lemon) => {
        if (lemon.isIntersecting === true) {
            lemon.target.classList.add('show2');
        } else {
            lemon.target.classList.remove('show2');
        }
    })
});

const myObserver3 = new IntersectionObserver((orange) => {
    orange.forEach((lemon) => {
        if (lemon.isIntersecting === true) {
            lemon.target.classList.add('show3');
        } else {
            lemon.target.classList.remove('show3');
        }
    })
});

const elements = document.querySelectorAll('.hidden');
const elements2 = document.querySelectorAll('.hidden2');
const elements3 = document.querySelectorAll('.hidden3');
const elements4 = document.querySelectorAll('.hidden4');

elements.forEach((element) => myObserver.observe(element));
elements2.forEach((element) => myObserver.observe(element));
elements3.forEach((element) => myObserver2.observe(element));
elements4.forEach((element) => myObserver3.observe(element));

// I HAVE NO FUCKING IDEA WHAT I'AM DOING 