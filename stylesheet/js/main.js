// MAKING THE NAVBAR TO STICK TO THE TOP PAGE WHEN SCROLL
const navbar =  document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

// MAKING THE NAVBAR ITEMS TO BE SELECTED TO THE CORRESPONDING PAGE

const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');

// MAKING THE PROGRESS BAR ITEMS TO BE SCALE TO THE CORRESPONDING %.
const progress = document.querySelector(".progress-bar-wrapper");
const progressBarPercent = [97, 89, 85, 87, 80, 70, 60];


window.addEventListener("scroll", () => {
    mainFn();
});

// to avoid unknown behaviour on the webpage
const mainFn = () =>{
       // console.log(window.pageYOffset, n
       if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop -10){
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            });
            navbarLinks[i].classList.add('change');
        }
    });
    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
        document.querySelectorAll('.progress-percent').forEach((el, i) =>{
            el.style.width = `${progressBarPercent[i]}%`;   
            el.previousElementSibling.firstElementChild.textContent = progressBarPercent[i];
        });
    }
}

mainFn();