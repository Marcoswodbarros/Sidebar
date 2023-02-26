let openSide = document.querySelector('#menu__closed');
let closeSide = document.querySelector('#menu__opened');
let vetLogo = document.querySelector('#vet__logo');
let liText1 = document.querySelector('.li__text--first');
let liText2 = document.querySelector('.li__text--second');
let liText3 = document.querySelector('.li__text--third');
let liText4 = document.querySelector('.li__text--fourth');
let liText5 = document.querySelector('.li__text--fifth');

openSide.addEventListener("click", openMenu);
closeSide.addEventListener("click", closeMenu);

function openMenu () {
    openSide.style.display = "none";
    closeSide.style.display = "block";
    vetLogo.style.display = "block";
    liText1.style.display = "inline";
    liText2.style.display = "inline";
    liText3.style.display = "inline";
    liText4.style.display = "inline";
    liText5.style.display = "inline";
}

function closeMenu () {
    openSide.style.display = "block";
    closeSide.style.display = "none";
    vetLogo.style.display = "none";
    liText1.style.display = "none";
    liText2.style.display = "none";
    liText3.style.display = "none";
    liText4.style.display = "none";
    liText5.style.display = "none";
}