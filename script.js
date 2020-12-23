// Global Variables
var navToggle = document.querySelector(".nav-toggle");
var navBar = document.querySelector(".header-container");
var navContent = document.querySelector(".menu-container");
var mobileNavBar = document.querySelector(".menu-container-overlay");
var newsSlider = document.querySelector(".news-slider");
var benefitSection = document.querySelector(".benefits");
var valueSection = document.querySelector(".value-container");
var teamSection = document.querySelector(".team-members");

// Databases
var newsDB = [
    {
        img: "./Img/Blue in Sky 120-V494-3_thumb_closeup.png",
        date: "01.02.2021",
        title: "Launch of the new AUROOM website",
        desc: "Description 1",
    },
    {
        img: "./Img/P324_BASF_Automotive_Color_Trends_2020_2021.JPG",
        date: "01.10.2020",
        title: "Our designers present the newest automotive color trends",
        desc: "Description 2"
    },
    {
        img: "./Img/Blue in Sky 120-V494-3_thumb_medium_right.png",
        date: "01.02.2021",
        title: "New virtual AUVOTs released",
        desc: "Description 3"
    },
];
var benefitDB = [
    {
        img: "./Img/Online retail.png",
        title: "Retail",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea porro dolores enim molestias accusamus nisi dicta voluptatum error distinctio dolorem, voluptatibus laborum aliquam! Fuga temporibus repellendus rem nihil molestiae nostrum illum saepe alias, veritatis aspernatur omnis? Deleniti corporis ad."
    },
    {
        img: "./Img/Design.png ",
        title: "Design",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea porro dolores enim molestias accusamus nisi dicta voluptatum error distinctio dolorem, voluptatibus laborum aliquam! Fuga temporibus repellendus rem nihil molestiae nostrum illum saepe alias, veritatis aspernatur omnis? Deleniti corporis ad."
    },
    {
        img: "./Img/Showroom.png",
        title: "Showroom",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea porro dolores enim molestias accusamus nisi dicta voluptatum error distinctio dolorem, voluptatibus laborum aliquam! Fuga temporibus repellendus rem nihil molestiae nostrum illum saepe alias, veritatis aspernatur omnis? Deleniti corporis ad."
    },
];
var valueDB = [
    {
        id: 1,
        title: "1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea porro dolores enim molestias accusamus nisi dicta voluptatum error distinctio dolorem, voluptatibus laborum aliquam! Fuga temporibus repellendus rem nihil molestiae nostrum illum saepe alias, veritatis aspernatur omnis? Deleniti corporis ad."
    },
    {
        id: 2,
        title: "2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea porro dolores enim molestias accusamus nisi dicta voluptatum error distinctio dolorem, voluptatibus laborum aliquam! Fuga temporibus repellendus rem nihil molestiae nostrum illum saepe alias, veritatis aspernatur omnis? Deleniti corporis ad."
    },
    {
        id: 3,
        title: "3",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea porro dolores enim molestias accusamus nisi dicta voluptatum error distinctio dolorem, voluptatibus laborum aliquam! Fuga temporibus repellendus rem nihil molestiae nostrum illum saepe alias, veritatis aspernatur omnis? Deleniti corporis ad."
    },
    {
        id: 4,
        title: "4",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea porro dolores enim molestias accusamus nisi dicta voluptatum error distinctio dolorem, voluptatibus laborum aliquam! Fuga temporibus repellendus rem nihil molestiae nostrum illum saepe alias, veritatis aspernatur omnis? Deleniti corporis ad."
    },
]
var teamDB = [
    {
        id: "mark-gutjahr",
        img: "./Img/Mark.png",
        title: "Head of Design",
        name: "Mark Gutjahr",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus optio dolorem eius assumenda, cupiditate dicta maiores iste deleniti hic repellat vero, dignissimos necessitatibus debitis."
    },
    {
        id: "michaela-finkenzeller",
        img: "./Img/Michaela.png",
        title: "Designer",
        name: "Michaela Finkenzeller",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus optio dolorem eius assumenda, cupiditate dicta maiores iste deleniti hic repellat vero, dignissimos necessitatibus debitis."
    },
    {
        id: "benjamin-lanfer",
        img: "./Img/Benji.png",
        title: "Color Scientist",
        name: "Benjamin Lanfer",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus optio dolorem eius assumenda, cupiditate dicta maiores iste deleniti hic repellat vero, dignissimos necessitatibus debitis."
    },
    {
        id: "jens-wegner",
        img: "./Img/Jens.png",
        title: "Head of Digital Business Solutions",
        name: "Jens Wegner",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus optio dolorem eius assumenda, cupiditate dicta maiores iste deleniti hic repellat vero, dignissimos necessitatibus debitis."
    },
    {
        id: "florina-trost",
        img: "./Img/Flowrina.png",
        title: "Designer",
        name: "Florina Trost",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus optio dolorem eius assumenda, cupiditate dicta maiores iste deleniti hic repellat vero, dignissimos necessitatibus debitis."
    },
    {
        id: "chris-schimetschka",
        img: "./Img/Chrizzle.png",
        title: "Product Manager",
        name: "Christian Schimetschka",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus optio dolorem eius assumenda, cupiditate dicta maiores iste deleniti hic repellat vero, dignissimos necessitatibus debitis?"
    },
];

// Global Event Listeners
window.addEventListener("DOMContentLoaded", loadContentDynamically);
window.addEventListener("scroll", stickyNavBar);
navToggle.addEventListener("click", overlayToggler);

// Functions

function loadContentDynamically(){
    displayNewsItems(newsDB);
    displayBenefits(benefitDB);
    displayValueProps(valueDB);
    displayTeamMembers(teamDB);
};

function displayTeamMembers(teamMembers){
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
    if(teamSection){
        teamSection.innerHTML = displayTeam;
        var groupMembers = teamSection.querySelectorAll(".team-toggler");
        groupMembers.forEach((groupMember) => {
            var memberImg = groupMember.querySelector(".team-toggler-link");
            var memberDetail = groupMember.querySelector(".team-toggler-details");
            memberImg.addEventListener("click", function() {
                groupMembers.forEach((crewMember) => {
                    var memberInfo = crewMember.querySelector(".team-toggler-details");
                    if (memberInfo !== memberDetail) {
                        memberInfo.classList.remove("is-open");
                        crewMember.style = "";
                    }
                });
                memberDetail.classList.toggle("is-open");
                if (memberDetail.classList.contains("is-open")) {
                    groupMember.style.marginBottom = "212px";
                } else {
                    groupMember.style = "";
                }
            });
        });
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
    if(newsSlider){
        newsSlider.innerHTML = displayNews;
    };
};

function displayBenefits(benefits){
    var displayBenefit = benefits.map(benefit =>
        `<article class="benefit">
        <img src="${benefit.img}" class="icon-benefit" alt="${benefit.title}">
            <h4>${benefit.title}</h4>
            <p>${benefit.desc}</p>
            </article>`
    ).join("");
    if(benefitSection){
        benefitSection.innerHTML = displayBenefit;
    };
};

function displayValueProps(values){
    var displayValue = values.map(value =>
        `<article class="value">
            <div class="value-number">
            <h1>${value.id}</h1>
            </div>
            <div class="value-text">
            <p>${value.desc}</p>
            </div>
        </article>`
    ).join("");
    if(valueSection){
        valueSection.innerHTML = displayValue;
    };
};

function overlayToggler(){
    navBar.classList.toggle("overlay");
    mobileNavBar.classList.toggle("menu-container-overlay--active");
};

function stickyNavBar(){
    var sticky = navBar.offsetTop;
    var logo = document.querySelector(".logo-container");
    if(window.scrollY > sticky){
        navBar.classList.add("sticky-header");
        navContent.classList.add("sticky-menu");
        logo.style.marginLeft = "0";
    } else{
        navBar.classList.remove("sticky-header");
        navContent.classList.remove("sticky-menu");
        logo.style = "none";
    };
};

// function teamToggler(event){
//     var listItem = event.currentTarget.parentElement;
//     // teamSection.classList.toggle("has-open");
//     listItem.lastElementChild.classList.toggle("is-open");
//     if(listItem.lastElementChild.classList.contains("is-open")){
//         listItem.style.marginBottom = "212px";
//     } else {
//         listItem.style = "";
//     }
// };