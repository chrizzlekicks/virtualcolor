const displayValueProps = (elements) => {
    const valueSection = document.querySelector(".value-container");
    const displayValue = elements.map(element => `<article class="value">
            <div class="value-number">
            <h1>${element.id}</h1>
            </div>
            <div class="value-text">
            <p>${element.desc}</p>
            </div>
        </article>`
    ).join("");
    if (valueSection) {
        valueSection.innerHTML = displayValue;
    }
};

export default displayValueProps