// Import
import links from "./links.js"
import news from "./news.js"
import benefits from "./benefits.js"
import values from "./values.js"
import team from "./team.js"

// Global Variables
var navBar = document.querySelector(".header-container");
var navContent = document.querySelector(".menu-container");
var mobileNavBar = document.querySelector(".menu-container-overlay");
var newsSlider = document.querySelector(".news-slider");
var benefitSection = document.querySelector(".benefits");
var valueSection = document.querySelector(".value-container");
var teamSection = document.querySelector(".team-members");
var prevBtn = document.querySelector(".prevBtn");
var nextBtn = document.querySelector(".nextBtn");
var counter = 0;

// Global Event Listeners
window.addEventListener("DOMContentLoaded", loadContentDynamically);
window.addEventListener("scroll", stickyNavBar);

// Functions
function loadContentDynamically() {
    displayMenu(links);
    displayNewsItems(news);
    displayBenefits(benefits);
    displayValueProps(values);
    displayTeamMembers(team);
}

function displayMenu(items) {
    navContent.innerHTML = items.map((item) => {
        var { toggler, sub, touch, main, btns } = item;
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
                <a href="${main.url}"><div class="logo"></div></a>
            </div>
        </div>`;
    });
    mobileNavBar.innerHTML = items.map((item) => {
        var { sub } = item;
        return `<div class="menu-content-overlay">
            <ul class="basf-menu-mobile">
            ${sub.map((link) => {
                return `<li class="menu-link"><a href="${link.url}">${link.label}</a></li>`
            }).join("")}
            </ul>
        </div>`;
    });
    var navToggle = navBar.querySelector(".nav-toggle");
    navToggle.addEventListener("click", overlayToggler);
}

function displayTeamMembers(teamMembers) {
    var displayTeam = teamMembers.map(member =>
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
        var groupMembers = teamSection.querySelectorAll(".team-toggler");
        groupMembers.forEach((groupMember) => {
            var memberImg = groupMember.querySelector(".team-toggler-link");
            var memberDetail = groupMember.querySelector(".team-toggler-details");
            memberImg.addEventListener("click", function() {
                groupMembers.forEach((crewMember) => {
                    var memberInfo = crewMember.querySelector(".team-toggler-details");
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
    var displayNews = newsArticles.map(article =>
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
        var articles = newsSlider.querySelectorAll(".news");
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
    var displayBenefit = items.map(item =>
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
    var displayValue = elements.map(element =>
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
    var logo = navBar.querySelector(".logo-container");
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