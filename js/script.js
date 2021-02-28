const banner = document.querySelector('.banner');
var i = 2;
setInterval(() => {
    banner.style.backgroundImage = "url(../img/bg-" + i + ".jpg)";
    i++;
    if (i > 4) i = 1;
}, 4000);


const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('header nav ul');
menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
});

const nav = document.querySelectorAll('nav ul li a');

nav.forEach(function (menu) {
    menu.addEventListener('click', function () {
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    })
})
