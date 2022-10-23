import links from './data/links.js';
import news from './data/news.js';
import benefits from './data/benefits.js';
import values from './data/values.js';
import team from './data/team.js';
import { displayNavBar, stickyNavBar } from './modules/displayNavBar.js';
import displayFooter from './modules/displayFooter.js';
import displayNewsItems from './modules/displayNewsItems.js';
import displayBenefits from './modules/displayBenefits.js';
import displayValueProps from './modules/displayValueProps.js';
import displayTeamMembers from './modules/displayTeamMembers.js';

const setupUI = () => {
	displayNavBar(links);
	displayFooter(links);
	displayNewsItems(news);
	displayBenefits(benefits);
	displayValueProps(values);
	displayTeamMembers(team);
};

window.addEventListener('DOMContentLoaded', setupUI);
window.addEventListener('scroll', stickyNavBar);
