// creating a responsive navbar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
    headerElem.classList.toggle("active");
});

// swiper js code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        // disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const myJsmedia = () => {
    if(widthSize.matches){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            
        });
    }else{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            
        });
    }
}


const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myJsmedia(widthSize);
// Attach listener function on state changes
widthSize.addEventListener("change", myJsmedia);


// scroll to top btn

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("ScrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" })
}

scroollElement.addEventListener("click", scrollTop);



// animate number counter

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        
        const initialNum = parseInt(curElem.innerText);


        const incrementNumber = Math.trunc(targetNumber / speed);


        if (initialNum < targetNumber) {
            curElem.innerText = `${initialNum + incrementNumber}+`;

            setTimeout(updateNumber, 10);
        }
    };

    updateNumber();
});