let openSide = document.querySelector('#menu__closed');
let closeSide = document.querySelector('#menu__opened');
let liText = document.querySelector('.li__text');

openSide.addEventListener("click", openMenu);
closeSide.addEventListener("click", closeMenu);

function openMenu () {
    openSide.style.display = "none";
    closeSide.style.display = "block";
    liText.style.display = "inline";
}

function closeMenu () {
    openSide.style.display = "block";
    closeSide.style.display = "none";
    liText.style.display = "none";
}