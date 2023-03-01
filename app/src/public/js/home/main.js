"use strict"

const user = document.querySelector("#user"),
    options = document.querySelector("#options"),
    option = document.querySelector("#option");

user.addEventListener("click", show);  

function show() {
    if (options.style.display == 'none') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
}