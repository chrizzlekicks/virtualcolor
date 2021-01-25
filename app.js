import links from "./src/links.js"
import news from "./src/news.js"
import benefits from "./src/benefits.js"
import values from "./src/values.js"
import team from "./src/team.js"
import { displayNavBar, stickyNavBar } from "./modules/displayNavBar.js"
import displayFooter from "./modules/displayFooter.js"
import displayNewsItems from "./modules/displayNewsItems.js"
import displayBenefits from "./modules/displayBenefits.js"
import displayValueProps from ".//modules/displayValueProps.js"
import displayTeamMembers from "./modules/displayTeamMembers.js"

const setupUI = () => {
    displayNavBar(links);
    displayFooter(links);
    displayNewsItems(news);
    displayBenefits(benefits);
    displayValueProps(values);
    displayTeamMembers(team);
}

window.addEventListener("DOMContentLoaded", setupUI);
window.addEventListener("scroll", stickyNavBar);