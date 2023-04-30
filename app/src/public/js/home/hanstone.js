"use strict"

const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})

const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

searchInput.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const user = document.querySelector("#user"),
    user2 = document.querySelector("#user2"),
    options = document.querySelector("#options"),
    option = document.querySelector("#option");

user.addEventListener("click", show);
user2.addEventListener("click", show);

function show() {
    if (options.style.display == 'none') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// let observer1 = new IntersectionObserver((e)=>{
//     e.forEach((box)=>{
//         if (box.isIntersecting){
//             box.target.style.opacity = 1;
//             // box.target.style.traslateY() = '6rem';
//         } else {
//             box.target.style.opacity = 0;
//         }
//     })
// })

// let observer2 = new IntersectionObserver((e)=>{
//     e.forEach((box)=>{
//         if (box.isIntersecting){
//             box.target.style.opacity = 1;
//         } else {
//             box.target.style.opacity = 0;
//         }
//     })
// })

// let first = document.querySelector('.parallax-item .first')
// observer1.observe(first)

// let second = document.querySelector('.parallax-item .second')
// observer2.observe(second)

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax-item .first", {
    scrollTrigger: {
        trigger: ".parallax-item .first",
        // markers: true,
        start: "top bottom",
        end: "bottom 80%",
        scrub: true,
},
    opacity: 1, y: 0, duration: 0.2
});

gsap.to(".txt2", {
    scrollTrigger: {
      trigger: ".txt2",
    //   markers: true,
      start: "bottom bottom",
      end: "top 90%",
      scrub: true,
},
    opacity: 1, y: 0
});


gsap.from(".txt3", {
    scrollTrigger: {
      trigger: ".content3",
    //   markers: true,
      start: "bottom bottom",
      end: "bottom 80%",
      scrub: true,
},
    opacity: 1, y: 0, fontSize: '130px'
});

gsap.to(".sec3", {
    scrollTrigger: {
      trigger: ".sec3",
      markers: true,
      start: "top bottom",
      end: "bottom 80%",
      scrub: true,
},
    background: 'rgb(0,0,0)'
});
