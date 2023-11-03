
const logo = document.querySelector(".logo");
const logos = document.querySelector(".logos");
const phoneNumber = document.querySelector(".phonenumber");
const boxs = document.querySelectorAll(".box");
const header = document.querySelector("header");
const arrowTop = document.getElementById("scrollToTop");
const btnInfo1 = document.querySelector(".btn-info-1");
const btnInfo2 = document.querySelector(".btn-info-2");
const btnInfo3 = document.querySelector(".btn-info-3");
const btnInfo4 = document.querySelector(".btn-info-4");
const btnInfo5 = document.querySelector(".btn-info-5");
const btnInfo6 = document.querySelector(".btn-info-6");

//this is events
window.addEventListener("scroll", scrolls);
window.addEventListener("load", unhide);
window.addEventListener("scroll", applyOpacityToBoxes);
window.addEventListener("scroll", applyOpacityToBoxes2);
arrowTop.addEventListener("click", scrollsTop);

//scroll function for Header
function scrolls() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 160) {
        logo.style.opacity = 1;
        header.classList.add("header");

    } else {
        logo.style.opacity = 0;
        header.classList.remove("header");
    };
};

//hid/unhide for Header
function unhide() {
    logos.style.opacity = 1;
    logos.style.marginBottom = 0;
    phoneNumber.style.opacity = 1;
    phoneNumber.style.marginBottom = 0;
};

function applyOpacityToBoxes() {
    const scrollShow = window.scrollY;

    boxs.forEach(function (box) {
        if (scrollShow >= 460) {
            box.style.opacity = 1;
        }
    });
};
function applyOpacityToBoxes2() {
    const scrollShow = window.scrollY;
    const scrollShowX = window.innerWidth;
    if (scrollShowX <= 818) {
        boxs.forEach(function (box) {
            if (scrollShow >= 100) {
                box.style.opacity = 1;
            }
        });
    };
};

function scrollsTop() {
    const animationDuration = 1000;
    
    // آغاز زمان اجرای انیمیشن
    const startTime = performance.now();
    
    // موقعیت فعلی اسکرول عمودی
    const startScrollY = window.scrollY;
    
    // موقعیت اسکرول مطلوب (صفحه بالا)
    const targetScrollY = 0;
    
    // اجرای انیمیشن
    function animateScroll(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < animationDuration) {
            const scrollPosition = easeInOutCubic(elapsedTime, startScrollY, targetScrollY - startScrollY, animationDuration);
            window.scrollTo(0, scrollPosition);
            requestAnimationFrame(animateScroll);
        } else {
            window.scrollTo(0, targetScrollY);
        }
    }
    
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    
    requestAnimationFrame(animateScroll);
}

//this for scorll for info boxs 
btnInfo1.addEventListener("click",()=>{
    const keyfari = document.querySelector(".keyfari");
    keyfari.scrollIntoView({ behavior: "smooth" });
});
btnInfo2.addEventListener("click",()=>{
    const hoghoghi = document.querySelector(".hoghoghi");
    hoghoghi.scrollIntoView({ behavior: "smooth" });
});
btnInfo3.addEventListener("click",()=>{
    const ghiyabi = document.querySelector(".ghiyabi");
    ghiyabi.scrollIntoView({ behavior: "smooth" });
});
btnInfo4.addEventListener("click",()=>{
    const ejareh = document.querySelector(".ejareh");
    ejareh.scrollIntoView({ behavior: "smooth" });
});
btnInfo5.addEventListener("click",()=>{
    const daneshjo = document.querySelector(".daneshjo");
    daneshjo.scrollIntoView({ behavior: "smooth" });
});
btnInfo6.addEventListener("click",()=>{
    const vam = document.querySelector(".vam");
    vam.scrollIntoView({ behavior: "smooth" });
});