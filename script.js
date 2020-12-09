// Global Variables
var navToggle = document.querySelector(".nav-toggle");
var overlay = document.querySelector(".header-container");
var mobileNavBar = document.querySelector(".menu-container-overlay");
var newsSlider = document.querySelector(".news-slider");
var newsDatabase = [
    {
        id: 1,
        img: "./Img/Blue in Sky 120-V494-3_thumb_closeup.png",
        date: "01.02.2021",
        title: "Launch of the new AUROOM website",
        desc: "Description 1",
    },
    {
        id: 2,
        img: "./Img/P324_BASF_Automotive_Color_Trends_2020_2021.JPG",
        date: "01.10.2020",
        title: "Our designers present the newest automotive color trends",
        desc: "Description 2"
    },
    {
        id: 3,
        img: "./Img/Blue in Sky 120-V494-3_thumb_medium_right.png",
        date: "01.02.2021",
        title: "New virtual AUVOTs released",
        desc: "Description 3"
    }
];

// Functions
function overlayToggler(){
    overlay.classList.toggle("overlay");
    mobileNavBar.classList.toggle("menu-container-overlay--active");
};

function displayNewsItems(newsArticles){
    var displayNews = newsArticles.map(function(article){
        return `<div class="news">
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
        </div>`;
    });
    displayNews = displayNews.join("");
    newsSlider.innerHTML = displayNews;
};

// Event Listeners
navToggle.addEventListener("click", overlayToggler);
window.addEventListener("DOMContentLoaded", displayNewsItems(newsDatabase));