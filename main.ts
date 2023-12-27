

const coverImgEl = document.querySelector(".cover-image") as HTMLImageElement;

if(window.innerWidth <= 435) {
    coverImgEl.src = "./assets/images/illustration-sign-up-mobile.svg";
} else if(window.innerWidth >= 435) {
    coverImgEl.src = "./assets/images/illustration-sign-up-desktop.svg";
}

window.addEventListener("resize", () => {
    
    if(window.innerWidth <= 435) {
        coverImgEl.src = "./assets/images/illustration-sign-up-mobile.svg";

    } else if(window.innerWidth >= 435) {
        coverImgEl.src = "./assets/images/illustration-sign-up-desktop.svg";
    }
})