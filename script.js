const homepageLocation = "index.html";
const linkLocation = [];
linkLocation.push = window.location.href.split('/');
const linkLocationName = linkLocation.at(-1);
console.log(linkLocation, linkLocationName);
let loginForm = document.querySelector(' .header .login-form');

document.querySelector('#login-butoni').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(' .header .navbar');

document.querySelector('#menu-butoni').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}


window.onload = () =>{
    if(linkLocationName == homepageLocation){   
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
        
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    }
}