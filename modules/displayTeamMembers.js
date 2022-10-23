const displayTeamMembers = (teamMembers) => {
    const teamSection = document.querySelector(".team-members");
    const displayTeam = teamMembers.map(member => `<li class="team-toggler" data-toggle-element="${member.id}" data-aos="fade-in-up">
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
    if (teamSection) {
        teamSection.innerHTML = displayTeam;
        const groupMembers = teamSection.querySelectorAll(".team-toggler");
        groupMembers.forEach((groupMember) => {
            const memberImg = groupMember.querySelector(".team-toggler-link");
            memberImg.addEventListener("click", () => {
                groupMembers.forEach((crewMember) => {
                    if (crewMember !== groupMember) {
                        crewMember.classList.remove("is-open");
                        crewMember.style = "";
                    }
                });
                groupMember.classList.toggle("is-open");
                if (groupMember.classList.contains("is-open")) {
                    groupMember.style.marginBottom = "212px";
                } else {
                    groupMember.style = "";
                }
            })
        })
    }
};

export default displayTeamMembers