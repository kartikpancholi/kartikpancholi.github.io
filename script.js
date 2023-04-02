'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * Send feedback/queries
 */

// const form = document.querySelector('.contact-form')

// function sendEmail(e) {

//   e.preventDefault();
//   const
//     name = document.getElementById('name'),
//     email = document.getElementById('email'),
//     message = document.getElementById('message')

//   email.send({
//     SecureToken: "1116f75e-2acc-437a-8084-11353dd1bb55",
//     To: 'kartikpancholi10.kp@gmail.com',
//     From: email.value,
//     Subject: name.value,
//     Body: message.value
//   }).then(
//     message => alert(message)
//   );
// }

// form.addEventListener('submit', sendEmail);



/**
 * Image Modal
 */

var modal = document.getElementById('myModal');

var modalTitle = document.getElementsByClassName('modal-title');
var img = document.getElementsByClassName('image');
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

var showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    const title = modalImg.src;
    document.getElementById("titleModal").innerHTML = title.slice(28, -4);
    captionText.innerHTML = this.alt;
}

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}



/** 
 
elastic password: 64B74115D3B2072C4360C62A19BE2F88C701
security token: 1116f75e-2acc-437a-8084-11353dd1bb55

**/