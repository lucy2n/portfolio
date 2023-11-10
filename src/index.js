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
        if(themeButton.classList.contains('header__button_theme_dark')) {
            page.classList.add('page_theme_dark')
            logo.classList.add('header__logo_theme_dark')
            headerLinks.forEach((item) => {
                item.classList.add('header__link_theme_dark')
            })
            projectLinks.forEach((item) => {
                item.classList.add('project__link_theme_dark')
            })
            borders.forEach((item) => {
                item.classList.add('project_theme_dark')
            })
            footerLinks.forEach((item) => {
                item.classList.add('footer__link_theme_dark')
            })
            arrowImage.classList.add('about__image_theme_dark')
        } else {
            page.classList.remove('page_theme_dark')
            logo.classList.remove('header__logo_theme_dark')
            headerLinks.forEach((item) => {
                item.classList.remove('header__link_theme_dark')
            })
            borders.forEach((item) => {
                item.classList.remove('project_theme_dark')
            })
            projectLinks.forEach((item) => {
                item.classList.remove('project__link_theme_dark')
            })
            footerLinks.forEach((item) => {
                item.classList.remove('footer__link_theme_dark')
            })
            arrowImage.classList.remove('about__image_theme_dark')
        }
    })
}

toggleButton();