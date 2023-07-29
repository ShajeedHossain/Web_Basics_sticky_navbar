const navbarElem = document.querySelector(".navbar");
const bottomcontainerElem = document.querySelector(".bottom-container");


window.addEventListener("scroll", ()=>{
    if(window.scrollY>bottomcontainerElem.offsetTop - navbarElem.offsetHeight -50){
        navbarElem.classList.add("active");
    }else{
        navbarElem.classList.remove("active");
    }

})