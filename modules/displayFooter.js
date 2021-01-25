const displayFooter = (items) => {
    const footer = document.querySelector(".footer-container");
    footer.innerHTML = items.map((item) => {
        const { social, challenges, solutions, about, contact, legal } = item;
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
            </div>`;
    });
};

export default displayFooter