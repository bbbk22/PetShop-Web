const homepageLocation = "index.html";
const linkLocation = window.location.href.split('/');
const linkLocationName = linkLocation.at(-1);
console.log(linkLocation, linkLocationName);

let loginForm = document.querySelector(' .header .login-form');

document.querySelector('#login-butoni').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(' .header .navbar');

document.querySelector('#menu-butoni').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');

}

window.onscroll = () => {
    if (linkLocationName == homepageLocation) {
        loginForm.classList.remove('active');
        navbar.classList.remove('active');

        if (window.scrollY > 0) {
            document.querySelector('.header').classList.add('active');
        } else {
            document.querySelector('.header').classList.remove('active');
        }
    } else {
        document.querySelector('.header').classList.add('active');
        navbar.classList.add('active');
    }
}


window.onload = () => {
    if (linkLocationName == homepageLocation) {
        loginForm.classList.remove('active');
        navbar.classList.remove('active');

        if (window.scrollY > 0) {
            document.querySelector('.header').classList.add('active');
        } else {
            document.querySelector('.header').classList.remove('active');
        }
    } else {
        document.querySelector('.header').classList.add('active');
        navbar.classList.add('active');
    }
}