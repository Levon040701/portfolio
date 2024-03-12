const palettesCount = 4;

function enter(color, number) {
    this.classList.add(...color, '_' + number);
}

function leave(color) {
    this.classList.remove(...color);
}

function changeColors() {
    let randomColors = Math.floor(Math.random() * palettesCount) + 1;

    let links = document.querySelectorAll('nav li');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.add('secondaryColor', '_' + randomColors);
    }

    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add('secondaryBg', '_' + randomColors);
    }

    let hoverBgElements = [
        ...document.querySelectorAll('button'),
        ...document.querySelectorAll('nav li'),
        ...document.querySelectorAll('#langWrapper li'),
        ...document.querySelectorAll('#langWrapper #lang')
    ];
    for (let i = 0; i < hoverBgElements.length; i++) {
        hoverBgElements[i].onmouseenter = enter.bind(hoverBgElements[i], ['thirdBg', 'thirdColor'], randomColors);
        hoverBgElements[i].onmouseleave = leave.bind(hoverBgElements[i], ['thirdBg', 'thirdColor']);
    }

    let elements = [
        ...document.getElementsByClassName('primaryBg'),
        ...document.getElementsByClassName('primaryBg'),
        ...document.getElementsByClassName('secondaryBg'),
        ...document.getElementsByClassName('secondaryColor'),
        ...document.getElementsByClassName('thirdBg'),
        ...document.getElementsByClassName('thirdColor')
    ];
    for (let i = 0; i < elements.length; i++) {
        for (let j = 1; j <= palettesCount; j++) {
            elements[i].classList.remove('_' + j);
        }
        elements[i].classList.add('_' + randomColors);
    }
}

function darken(active) {
    let elems = document.getElementsByClassName('projectElem');
    for (let i = 0; i < elems.length; i++) {
        if (elems[i] !== active) {
            elems[i].style.opacity = 0.4;
        }
    }
}

function lighten() {
    let elems = document.getElementsByClassName('projectElem');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.opacity = 1;
    }
}

let menu = document.querySelectorAll('nav li');
let sec = document.querySelectorAll('section:not(#breadcrumbs)');
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', () => {
        sec[i].scrollIntoView({behavior: 'smooth'});
    });
}

