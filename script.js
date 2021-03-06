let buttons = document.querySelectorAll('.h2');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        let parent = button.parentNode;
        if (parent.classList.contains('list__wrap-active')) {
            parent.classList.remove('list__wrap-active');    
        }
        else {
            if (document.querySelector('.list__wrap-active')) {
                document.querySelector('.list__wrap-active').classList.remove('list__wrap-active');
            }
            parent.classList.add('list__wrap-active');
        }
    });
});

let burger = document.querySelector('.burger');
let settings = document.querySelector('.settings');
let body = document.body;
let onBurgerClick = function () {
    burger.classList.toggle('burger-active');
    settings.classList.toggle('settings-active');
    body.classList.toggle('body-hidden');
};
burger.addEventListener('click', onBurgerClick);

let fontButtonMini = document.querySelector('.font-mini');
let fontButtonBig = document.querySelector('.font-big');
let onFontMiniClick = function () {
    fontButtonMini.classList.add('font-active');
    fontButtonBig.classList.remove('font-active');
    body.classList.add('body-fontmini');
};
let onFontBigClick = function () {
    fontButtonBig.classList.add('font-active');
    fontButtonMini.classList.remove('font-active');
    body.classList.remove('body-fontmini');
};
fontButtonMini.addEventListener('click', onFontMiniClick);
fontButtonBig.addEventListener('click', onFontBigClick);

let themeButton = document.querySelector('.theme__button');
let onThemeButtonClick = function () {
    themeButton.classList.toggle('theme__button-dark');
    body.classList.toggle('body-dark');
};
themeButton.addEventListener('click', onThemeButtonClick);

let linkCount = document.querySelector('.link-count');
let groupCount = document.querySelector('.group-count')
linkCount.textContent = 'Всего ссылок: ' + document.querySelectorAll('a').length;
groupCount.textContent = 'Всего групп: ' + document.querySelectorAll('ul').length;

let colorButton = document.querySelector('.color-button');
let onColorButtonClick = function () {
    body.classList.toggle('body-bw');
};
colorButton.addEventListener('click', onColorButtonClick);