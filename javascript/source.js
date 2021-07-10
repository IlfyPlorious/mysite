const menuBtn = document.getElementById('mobileMenuIcon')
      nav = document.querySelector('nav')
      menuBtnExit = document.getElementById('mobileXIcon');

menuBtn.addEventListener('click', () => {
    nav.classList.add('menuBtn');
})

menuBtnExit.addEventListener('click', () => {
    nav.classList.remove('menuBtn');
})

