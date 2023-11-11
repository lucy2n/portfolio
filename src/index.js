import "./index.css";

const page = document.querySelector('.page');
const logo = page.querySelector('.header__logo');
const themeButton = page.querySelector('.header__button');
const headerLinks = page.querySelectorAll('.header__link');
const footerLinks = page.querySelectorAll('.footer__link');
const projectLinks = page.querySelectorAll('.project__link')
const arrowImage = page.querySelector('.about__image');
const borders = page.querySelectorAll('.project')

const toggleButton = () => {
    themeButton.addEventListener("click", () => {
        themeButton.classList.toggle('header__button_theme_dark')
        page.classList.toggle('page_theme_dark')
        logo.classList.toggle('header__logo_theme_dark')
        headerLinks.forEach((item) => {
            item.classList.toggle('header__link_theme_dark')
        })
        projectLinks.forEach((item) => {
            item.classList.toggle('project__link_theme_dark')
        })
        borders.forEach((item) => {
            item.classList.toggle('project_theme_dark')
        })
        footerLinks.forEach((item) => {
            item.classList.toggle('footer__link_theme_dark')
        })
        arrowImage.classList.toggle('about__image_theme_dark')
    })
}

toggleButton();