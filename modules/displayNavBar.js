const navBar = document.querySelector(".header-container");
const navContent = document.querySelector(".menu-container");
const mobileNavBar = document.querySelector(".menu-container-overlay"); 

const displayNavBar = (items) => {
    navContent.innerHTML = items.map((item) => {
        const { toggler, sub, touch, main, btns } = item;
        return `<div class="menu-content">
            <nav class="top-nav">
                <div class="nav-toggle">
                    <button class="hamburger-btn" type="button">
                        <img src="${toggler.icon}" alt="${toggler.label}" id="${toggler.label}">
                    </button>
                </div>
                <ul class="basf-menu">
                    ${sub.map((link) => {
            return `<li><a href="${link.url}">${link.label}</a></li>`;
        }).join("")}
                </ul>
                <ul class="menu-action">
                    ${touch.map((link) => {
            return `<li><a href="${link.url}">${link.label}</a></li>`;
        }).join("")}
                    ${btns.map((btn) => {
            return `<img src="${btn.icon}" id="${btn.label}" alt="${btn.label}">`;
        }).join("")}
                </ul>
            </nav>
            <div class="logo-container">
                <a href="${main}"><div class="logo"></div></a>
            </div>
        </div>`;
    });
    mobileNavBar.innerHTML = items.map((item) => {
        const { sub } = item;
        return `<div class="menu-content-overlay">
            <ul class="basf-menu-mobile">
            ${sub.map((link) => {
            return `<li class="menu-link"><a href="${link.url}">${link.label}</a></li>`;
        }).join("")}
            </ul>
        </div>`;
    });
    const navToggle = navBar.querySelector(".nav-toggle");
    const overlayToggler = () => {
        navBar.classList.toggle("overlay");
        mobileNavBar.classList.toggle("active");
    }
    navToggle.addEventListener("click", overlayToggler);
};

const stickyNavBar = () => {
    let logo = navBar.querySelector(".logo-container");
    if(window.scrollY > navBar.offsetTop) {
        navBar.classList.add("sticky-header");
        navContent.classList.add("sticky-menu");
        logo.style.marginLeft = "0";
    } else {
        navBar.classList.remove("sticky-header");
        navContent.classList.remove("sticky-menu");
        logo.style = "none";
    }
}

export { displayNavBar, stickyNavBar }