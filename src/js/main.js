let openSide = document.querySelector('#menu__closed');
let closeSide = document.querySelector('#menu__opened');
let vetLogo = document.querySelector('#vet__logo');
let nav = document.querySelector('nav');
let input = document.querySelector('input');
let liText1 = document.querySelector('.li__text--first');
let liText2 = document.querySelector('.li__text--second');
let liText3 = document.querySelector('.li__text--third');
let liText4 = document.querySelector('.li__text--fourth');
let liText5 = document.querySelector('.li__text--fifth');
let userPic = document.querySelector('#user__pic');
let userInfo = document.querySelector('.user__info');
let logout = document.querySelector('#logout');

openSide.addEventListener("click", openMenu);
closeSide.addEventListener("click", closeMenu);

function openMenu () {
    openSide.style.display = "none";
    closeSide.style.display = "block";
    vetLogo.style.display = "block";
    nav.style.width = "25rem";
    input.style.width = "90%";
    liText1.style.display = "inline";
    liText2.style.display = "inline";
    liText3.style.display = "inline";
    liText4.style.display = "inline";
    liText5.style.display = "inline";
    userPic.style.display = "block";
    userInfo.style.display = "block";
    logout.style.marginLeft = "2rem";
}

function closeMenu () {
    openSide.style.display = "block";
    closeSide.style.display = "none";
    vetLogo.style.display = "none";
    nav.style.width = "auto";
    input.style.width = "2rem";
    liText1.style.display = "none";
    liText2.style.display = "none";
    liText3.style.display = "none";
    liText4.style.display = "none";
    liText5.style.display = "none";
    userPic.style.display = "none";
    userInfo.style.display = "none";
    logout.style.marginLeft = "auto";
}