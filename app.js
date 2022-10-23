import links from './modules/links.js';
import news from './modules/news.js';
import benefits from './modules/benefits.js';
import values from './modules/values.js';
import team from './modules/team.js';
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
