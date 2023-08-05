const hbutton=document.querySelector("#hbutton");
const mbutton=document.querySelector("#mbutton");
const tbutton=document.querySelector("#tbutton");
var allpages=document.querySelectorAll(".page");
const menuItemsList=document.querySelector("nav ul");
const titlenav=document.querySelector("#titlenav")
const hamBtn=document.querySelector("#hamIcon");

//Pages
console.log(allpages);
function hideall() {
    for(let onepage of allpages) {
        onepage.style.display="none";
    }
}
hideall();
function show(pgno) {
    hideall();
    let onepage=document.querySelector("#page"+pgno);
    onepage.style.display="block";
}

hbutton.addEventListener("click", function () {
    show(1);
});
mbutton.addEventListener("click", function () {
    show(2);
});
tbutton.addEventListener("click", function () {
    show(3);
});

//Menu
function toggleMenus() {
    menuItemsList.classList.toggle("menuShow");
}
hamBtn.addEventListener("click",toggleMenus);

//Collapse/Expand
var animateTimer;
var content = hamBtn.nextElementSibling;
function menuStart() {
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    }
    else {
        animateTimer = setInterval(MenuReveal, 0);
    }
}
function MenuReveal() {
    if (content.style.maxHeight) {
        clearInterval(animateTimer);
        animateTimer = null;
    } 
    else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
hamBtn.addEventListener("click", menuStart);