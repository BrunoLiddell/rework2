let nav       = document.querySelector('header#candidats');
let header    = document.querySelector('#home header');
let navHeight = nav.offsetHeight;

function setHeaderHeight(){
    header.style.minHeight = 'calc(100vh - ' + navHeight + 'px)';
}

setHeaderHeight();

window.addEventListener('resize', setHeaderHeight);