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
    var blurElement = document.getElementById("main");
    var sabbathColumn = document.getElementById("sabbath-column-button");
    var menuButton = document.getElementById("navbar");
    var churchNameLogo = document.getElementById("church-name-logo");
    var menuButtonMobile = document.getElementById("navbar-mobile");
    var scrollToTopButton = document.getElementById("scroll-to-top-btn");

    scrollToTopButton.classList.remove("show-btn");
    menuButtonMobile.classList.remove("elements-visible");
    menuButtonMobile.classList.add("elements-hide");
    churchNameLogo.classList.remove("elements-visible");
    churchNameLogo.classList.add("elements-hide");
    menuButton.classList.remove("elements-visible");
    menuButton.classList.add("elements-hide");
    sabbathColumn.classList.remove("elements-visible");
    sabbathColumn.classList.add("elements-hide");
    blurElement.classList.remove("no-blur-filter");
    blurElement.classList.add("blur-filter");
    document.getElementById("my-nav").style.right = 0;
}


// Closes the overlay
function closeNav() {
    var blurElement = document.getElementById("main");
    var sabbathColumn = document.getElementById("sabbath-column-button");
    var menuButton = document.getElementById("navbar");
    var churchNameLogo = document.getElementById("church-name-logo");
    var menuButtonMobile = document.getElementById("navbar-mobile");

    menuButtonMobile.classList.remove("elements-hide");
    menuButtonMobile.classList.add("elements-visible");
    churchNameLogo.classList.remove("elements-hide");
    churchNameLogo.classList.add("elements-visible");
    menuButton.classList.remove("elements-hide");
    menuButton.classList.add("elements-visible");
    sabbathColumn.classList.remove("elements-hide");
    sabbathColumn.classList.add("elements-visible");
    blurElement.classList.remove("blur-filter");
    blurElement.classList.add("no-blur-filter");
    document.getElementById("my-nav").style.right = "-100%";
    document.getElementById("navbar").style.top = "0px";
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

var scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
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

function handleNavbar() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar-mobile").style.top = "0";
    } else {
        // await delay(100);
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("navbar-mobile").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
document.addEventListener("scroll", handleNavbar);