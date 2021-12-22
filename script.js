// Opens the overlay
function openNav() {
    var blurElement = document.getElementById("main");
    var sabbathColumn = document.getElementById("sabbath-column-button");
    var menuButton = document.getElementById("navbar");
    var churchNameLogo = document.getElementById("church-name-logo");
    var menuButtonMobile = document.getElementById("navbarMobile");
    var scrollToTopButton = document.getElementById("scrollToTopButton");

    scrollToTopButton.classList.remove("showBtn");
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
    document.getElementById("myNav").style.width = "85.68%";
}


// Closes the overlay
function closeNav() {
    var blurElement = document.getElementById("main");
    var sabbathColumn = document.getElementById("sabbath-column-button");
    var menuButton = document.getElementById("navbar");
    var churchNameLogo = document.getElementById("church-name-logo");
    var menuButtonMobile = document.getElementById("navbarMobile");

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
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("navbar").style.top = "0px";
}

function hideSabbathColumn() {

}

// Disable scrolling when menu is opened
function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function() { window.scrollTo(x, y); };
}


// Enable scrolling when menu is closed
function enableScrolling() {
    window.onscroll = null;
}


// Scroll Up Button
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.33) {
        scrollToTopBtn.classList.add("showBtn")
    } else {
        scrollToTopBtn.classList.remove("showBtn")
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


// Scroll Up Navbar
var prevScrollpos = window.pageYOffset;

function handleNavbar() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbarMobile").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("navbarMobile").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
document.addEventListener("scroll", handleNavbar);