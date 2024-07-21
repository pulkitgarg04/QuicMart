const bar = document.getElementById('hamburger');
const nav = document.getElementById('navbar');
const close = document.getElementById('close-btn');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('navbar-active');
    });
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('navbar-active');
    });
}