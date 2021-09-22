//SHRINK NAVBAR ON SCROLL

//device width
let width = window.innerWidth > 0 ? window.innerWidth : screen.width;

//so that it sets the size immediately when the page loads
window.onload = function() {
    navShrinker();
}

//change size on scroll
window.onscroll = function () {
    navShrinker();
};

const cNav = document.getElementById("comicNav");

// let mouseIsOver = false;

// if (mouseIsOver === true) {
//     console.log("mouseover - " + mouseIsOver);
//     if (screen.width < 767.98) {
//         cNav.style.height = "70px";
//     } else {
//         cNav.style.height = "100px";
//     }
// } else {
//     console.log("mouseover - " + mouseIsOver);
//     if (screen.width > 767.98) {
//         cNav.style.height = "50px";
//     }
// }

//enlarge on mouse over
cNav.addEventListener("mouseenter", function () {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        if (screen.width < 767.98) {
            cNav.style.height = "70px";
        } else {
            cNav.style.height = "100px";
        }
    }
});

cNav.addEventListener("mouseleave", function () {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        if (screen.width > 767.98) {
            cNav.style.height = "50px";
        }
    }
});

function navShrinker() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        if (screen.width > 767.98) {
            cNav.style.height = "50px";
        }
    } else {
        if (screen.width < 767.98) {
            cNav.style.height = "70px";
        } else {
            cNav.style.height = "100px";    
        }
    }
}
