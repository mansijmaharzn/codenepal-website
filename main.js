const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');


// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);


// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const programsMenu = document.querySelector('#programs-page');
    const joinMenu = document.querySelector('#join-page');

    let scrollPosition = window.scrollY

    // adds 'highlight' class to menu items
    if (window.innerWidth > 960 && scrollPosition < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPosition < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        programsMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPosition < 2380) {
        programsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        joinMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPosition < 3435) {
        joinMenu.classList.add('highlight');
        programsMenu.classList.remove('highlight');
        return
    }

    if ((elem && window.innerWidth < 960 && scrollPosition < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


// Close mobile menu when clicked on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');

    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);