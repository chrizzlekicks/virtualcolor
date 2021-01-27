const displayBenefits = (items) => {
    const benefitSection = document.querySelector(".benefits");
    const displayBenefit = items.map(item => `<article class="benefit" data-aos="fade-in-up">
        <img src="${item.img}" class="icon-benefit" alt="${item.title}">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            </article>`
    ).join("");
    if (benefitSection) {
        benefitSection.innerHTML = displayBenefit;
    }
};

export default displayBenefits