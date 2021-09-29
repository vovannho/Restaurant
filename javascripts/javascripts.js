

const toP = document.querySelector(".top")
window.addEventListener("scroll", function () {
    const x = pageYOffset;
    if (x > 80) {
        toP.classList.add("active")
    }
    else {
        toP.classList.remove("active")

    }
})
//-------------Menu-mon-an
const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click", function (x) {
    if (x.target.classList.contains("menu-button")) {
        const Target = x.target.getAttribute("data-title");
        // console.log(Target)
        menuTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");

        const menuItem = document.querySelector(".menu");
        menuItem.querySelector(".menu-item-content.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active")
    }
})