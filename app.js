// Import
import links from "./links.js"
import news from "./news.js"
import benefits from "./benefits.js"
import values from "./values.js"
import team from "./team.js"

// Global Variables
const navBar = document.querySelector(".header-container");
const navContent = document.querySelector(".menu-container");
const mobileNavBar = document.querySelector(".menu-container-overlay");
const footer = document.querySelector(".footer-container");
const newsSlider = document.querySelector(".news-slider");
const benefitSection = document.querySelector(".benefits");
const valueSection = document.querySelector(".value-container");
const teamSection = document.querySelector(".team-members");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
let counter = 0;

// Global Event Listeners
window.addEventListener("DOMContentLoaded", setupUI);
window.addEventListener("scroll", stickyNavBar);

// Functions
function setupUI() {
    displayNavBar(links);
    displayFooter(links);
    displayNewsItems(news);
    displayBenefits(benefits);
    displayValueProps(values);
    displayTeamMembers(team);
}

function displayNavBar(items) {
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
                        return `<li><a href="${link.url}">${link.label}</a></li>`
                    }).join("")}
                </ul>
                <ul class="menu-action">
                    ${touch.map((link) => {
                        return `<li><a href="${link.url}">${link.label}</a></li>`
                    }).join("")}
                    ${btns.map((btn) => {
                        return `<img src="${btn.icon}" id="${btn.label}" alt="${btn.label}">`  
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
                return `<li class="menu-link"><a href="${link.url}">${link.label}</a></li>`
            }).join("")}
            </ul>
        </div>`;
    });
    const navToggle = navBar.querySelector(".nav-toggle");
    navToggle.addEventListener("click", overlayToggler);
}

function displayFooter(items) {
    footer.innerHTML = items.map((item) => {
        const { social, challenges, solutions, about, contact, legal} = item;
        return `<div class="socialmedia">
        <div class="socialmenu">
            <div class="socialmenu-header">
                <h2 class="footer-h2">Folgen Sie uns</h2>
            </div>
                <div class="socialmenu-icons">
                    <ul>
                        ${social.map((link) => `<li class="social-items"><a href="${link.url}"><i class="${link.icon}"></i></a></li>`).join("")}
                    </ul>
                </div>
        </div>
    </div>
    <div class="footer-nav">
        	<div class="footer-heading footer-1">
                <h2>Challenges</h2>
                ${challenges.map(link => `<a href="${link.url}">${link.label}</a>`).join("")} 
            </div>
            <div class="footer-heading footer-2">
                <h2>Solutions</h2>
                ${solutions.map(link => `<a href="${link.url}">${link.label}</a>`).join("")} 
            </div>
            <div class="footer-heading footer-3">
                <h2>About Us</h2>
                ${about.map(link => `<a href="${link.url}">${link.label}</a>`).join("")} 
            </div>
            <div class="footer-heading footer-4">
                <h2>Contact Us</h2>
                ${contact.map(link => `<a href="${link.url}">${link.label}</a>`).join("")}  
            </div>
        </div>
            <div class="legal">
                <p>${legal}</p>
            </div>`
    })
}

function displayTeamMembers(teamMembers) {
    const displayTeam = teamMembers.map(member =>
        `<li class="team-toggler" data-toggle-element="${member.id}">
            <div class="team-toggler-link">
                <img src="${member.img}" alt="${member.name}">
            </div>
            <div class="team-toggler-details">
                <h4 class="team-member-title">${member.title}</h4>
                <h3 class="team-member-name">${member.name}</h3>
                <p class="team-member-description">${member.desc}</p>
            </div>
        </li>`
    ).join("");
    if(teamSection) {
        teamSection.innerHTML = displayTeam;
        const groupMembers = teamSection.querySelectorAll(".team-toggler");
        groupMembers.forEach((groupMember) => {
            const memberImg = groupMember.querySelector(".team-toggler-link");
            const memberDetail = groupMember.querySelector(".team-toggler-details");
            memberImg.addEventListener("click", function() {
                groupMembers.forEach((crewMember) => {
                    const memberInfo = crewMember.querySelector(".team-toggler-details");
                    if(memberInfo !== memberDetail) {
                        memberInfo.classList.remove("is-open");
                        crewMember.style = "";
                    }
                });
                memberDetail.classList.toggle("is-open");
                if(memberDetail.classList.contains("is-open")) {
                    groupMember.style.marginBottom = "212px";
                } else {
                    groupMember.style = "";
                }
            })
        })
    }
}

function displayNewsItems(newsArticles){
    const displayNews = newsArticles.map(article =>
        `<div class="news">
            <img src="${article.img}" alt="${article.title}" width="325px" height="200px">
            <p class="date">${article.date}</p>
            <h3>${article.title}</h3>
            <p>${article.desc}</p>
            <hr>
            <div class="icon-text">
                <img src="./Img/Path 47.png" alt="download" width="16.5px" height="20px">
                <p>PDF (6.2 MB)</p>
                </div>
            <div class="icon-text">
                <img src="./Img/Link_circle-1.jpg" alt="learn-more" width="20px" height="20px">
                <p>Learn more</p> 
            </div>
        </div>`
    ).join("");
    if(newsSlider) {
        newsSlider.innerHTML = displayNews;
        const articles = newsSlider.querySelectorAll(".news");
        articles.forEach((article, index) => {
            article.style.left = `${index * 100}%`;
        });
        prevBtn.addEventListener("click", function() {
            counter--;
            slideShow(articles);
        });
        nextBtn.addEventListener("click", function() {
            counter++;
            slideShow(articles);
        });
    }
}

function displayBenefits(items) {
    const displayBenefit = items.map(item =>
        `<article class="benefit">
        <img src="${item.img}" class="icon-benefit" alt="${item.title}">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            </article>`
    ).join("");
    if(benefitSection) {
        benefitSection.innerHTML = displayBenefit;
    }
}

function displayValueProps(elements) {
    const displayValue = elements.map(element =>
        `<article class="value">
            <div class="value-number">
            <h1>${element.id}</h1>
            </div>
            <div class="value-text">
            <p>${element.desc}</p>
            </div>
        </article>`
    ).join("");
    if(valueSection) {
        valueSection.innerHTML = displayValue;
    }
}

function stickyNavBar() {
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

function overlayToggler() {
    navBar.classList.toggle("overlay");
    mobileNavBar.classList.toggle("active");
}

function slideShow(slides) {
    if(counter === slides.length) {
        counter = 0;
    }
    if(counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}