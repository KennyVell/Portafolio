document.addEventListener("DOMContentLoaded", () => {
    let tema = localStorage.getItem('theme');
    let body = document.querySelector('body');
    if (tema === 'light') {
        body.classList.add('theme-light');
        body.classList.remove('theme-dark');
        body.classList.remove('theme-free');
    } else if (tema === 'dark') {
        body.classList.add('theme-dark');
        body.classList.remove('theme-light');
        body.classList.remove('theme-free');
    } else if (tema === 'free') {
        body.classList.add('theme-free');
        body.classList.remove('theme-light');
        body.classList.remove('theme-dark');
    } else {
        body.classList.add('theme-light');
        body.classList.remove('theme-dark');
        body.classList.remove('theme-free');
    }
});

function cambiarTema() {
    let tema = document.querySelector('#tema').value;
    let body = document.querySelector('body');
    if (tema === 'lt') {
        body.classList.add('theme-light');
        body.classList.remove('theme-dark');
        body.classList.remove('theme-free');
        localStorage.setItem('theme', 'light');
    } else if (tema === 'dk') {
        body.classList.add('theme-dark');
        body.classList.remove('theme-light');
        body.classList.remove('theme-free');
        localStorage.setItem('theme', 'dark');
    } else if (tema === 'yw') {
        body.classList.add('theme-free');
        body.classList.remove('theme-light');
        body.classList.remove('theme-dark');
        localStorage.setItem('theme', 'free');
    } else {
        body.classList.add('theme-light');
        body.classList.remove('theme-dark');
        body.classList.remove('theme-free');
        localStorage.setItem('theme', 'light');
    }
}