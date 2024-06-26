/**
 * Copyright Footer
 */
document.getElementById("copyright").innerHTML = "&copy " + new Date().getFullYear() + " Biserica Adventistă de Ziua a Șaptea România | Conferința Transilvania Sud";

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

/**
 * Menu Overlay - Adding Blur
 */

// Opens the overlay
function openNav() {
    var sabbathColumn = document.getElementById("sabbath-column-button");
    var menuButton = document.getElementById("navbar-bar");
    var scrollToTopButton = document.getElementById("scroll-to-top");

    sabbathColumn.classList.remove("elements-visible");
    sabbathColumn.classList.add("elements-hide");

    document.getElementById("my-nav").style.right = 0;
    document.getElementById("my-nav-background").style.opacity = 1;
    document.getElementById("my-nav-background").style.zIndex = 2;
    document.getElementById("mobile-navbar-button").style.opacity = 0;
    document.getElementById("mobile-navbar-button").style.cursor = "default";
    menuButton.style.top = "-200px";
    menuButton.style.opacity = 0;
    scrollToTopButton.style.bottom = "-100px";
}


// Closes the overlay
function closeNav() {
    var sabbathColumn = document.getElementById("sabbath-column-button");
    var menuButton = document.getElementById("navbar-bar");
    var scrollToTopButton = document.getElementById("scroll-to-top");

    sabbathColumn.classList.remove("elements-hide");
    sabbathColumn.classList.add("elements-visible");

    document.getElementById("mobile-navbar-button").style.opacity = 1;
    document.getElementById("mobile-navbar-button").style.cursor = "pointer";
    document.getElementById("my-nav").style.right = "-100%";
    document.getElementById("my-nav-background").style.zIndex = -5;

    document.getElementById("my-nav-background").style.opacity = 0;
    document.getElementById("navbar-bar").style.top = "2em";
    menuButton.style.top = "2em";
    menuButton.style.opacity = 1;
    scrollToTopButton.style.bottom = "50px";
}

/**
 * Disable Scrolling
 */

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// Disable scrolling when menu is opened
function disableScrolling() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// Enable scrolling when menu is closed
function enableScrolling() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


/**
 * Scroll Up Button
 */

var scrollToTopBtn = document.querySelector(".scroll-to-top-container");
var rootElement = document.documentElement;

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if ((rootElement.scrollTop / scrollTotal) > 0.33) {
        scrollToTopBtn.classList.add("show-btn")
    } else {
        scrollToTopBtn.classList.remove("show-btn")
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

/**
 * Scrolls up the navbar
 */

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

var prevScrollpos = window.pageYOffset;

async function handleNavbar() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || window.pageYOffset <= 50) {
        document.getElementById("navbar-bar").style.top = "2em";
    } else {
        await delay(100);
        document.getElementById("navbar-bar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}
document.addEventListener("scroll", handleNavbar);

/**
 * Elements fade in/out on scroll
 */

function revealElements() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 25;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealElements);

// animation for revealing the menu buttons
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-elements-fade');
        } else {
            entry.target.classList.remove('show-elements-fade');
        }
    });
});
const hiddenMenuElementsFade = document.querySelectorAll('.hide-menu-elements-fade');
hiddenMenuElementsFade.forEach((element) => observer.observe(element));