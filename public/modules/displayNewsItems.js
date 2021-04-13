let counter = 0;

const slideShow = (slides) => {
    if(counter === slides.length) {
        counter = 0;
    }
    if(counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach(slide => slide.style.transform = `translateX(-${counter * 100}%)`)
}

const displayNewsItems = (newsArticles) => {
    const newsSlider = document.querySelector(".news-slider");
    const displayNews = newsArticles.map(article => `<div class="news">
            <img src="${article.img}" alt="${article.title}" width="325px" height="200px">
            <p class="date">${article.date}</p>
            <h3>${article.title}</h3>
            <p>${article.desc}</p>
            <hr>
            <div class="icon-text">
                <img src="./assets/Path 47.png" alt="download" width="16.5px" height="20px">
                <p>PDF (6.2 MB)</p>
                </div>
            <div class="icon-text">
                <img src="./assets/Link_circle-1.jpg" alt="learn-more" width="20px" height="20px">
                <p>Learn more</p> 
            </div>
        </div>`
    ).join("");
    if (newsSlider) {
        newsSlider.innerHTML = displayNews;
        const prevBtn = document.querySelector(".prevBtn");
        const nextBtn = document.querySelector(".nextBtn");
        const articles = newsSlider.querySelectorAll(".news");
        articles.forEach((article, index) => {
            article.style.left = `${index * 100}%`;
        });
        prevBtn.addEventListener("click", () => {
            counter--;
            slideShow(articles);
        });
        nextBtn.addEventListener("click", () => {
            counter++;
            slideShow(articles);
        });
    }
};

export default displayNewsItems