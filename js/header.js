const header = document.querySelector('.header1');
const logo = document.querySelector('.logo');

function scrollFunc() {
    if (pageYOffset >= 150) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
    if (pageYOffset >= 150) {
        logo.classList.add('an')
    } else {
        logo.classList.remove('an')
    }
    
}
window.addEventListener('scroll', scrollFunc, 400);