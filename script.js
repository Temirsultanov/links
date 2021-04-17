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
let onBurgerClick = function () {
    burger.classList.toggle('burger-active');
    settings.classList.toggle('settings-active');
};
burger.addEventListener('click', onBurgerClick);

let fontButtonMini = document.querySelector('.font-mini');
let fontButtonBig = document.querySelector('.font-big');
let body = document.body;
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