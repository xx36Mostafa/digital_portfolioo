// Main JavaScript File - Populate Dynamic Content

// Populate Skills Section
function populateSkills() {
    const skillsGrid = document.getElementById('skills-grid');

    portfolioData.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card fade-in';
        skillCard.style.setProperty('--skill-color', skill.color);
        skillCard.style.setProperty('--skill-glow', `${skill.color}50`);

        const techList = skill.technologies.map(tech => `<li>${tech}</li>`).join('');

        skillCard.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.category}</h3>
            <ul>
                ${techList}
            </ul>
        `;

        skillsGrid.appendChild(skillCard);
    });
}

// Populate Experience Section
function populateExperience() {
    const timeline = document.getElementById('timeline');

    portfolioData.experience.forEach((job, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`;

        const responsibilities = job.responsibilities.map(resp => `<li>${resp}</li>`).join('');

        const companyLink = job.companyUrl
            ? `<a href="${job.companyUrl}" target="_blank" class="company-name">
                ${job.company} <i class="fas fa-external-link-alt"></i>
               </a>`
            : `<span class="company-name">${job.company}</span>`;

        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="job-title">${job.title}</h3>
                ${companyLink}
                <div class="job-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${job.location}
                </div>
                <span class="job-date">${job.startDate} - ${job.endDate}</span>
                <ul class="responsibilities">
                    ${responsibilities}
                </ul>
            </div>
        `;

        timeline.appendChild(timelineItem);
    });
}

// Populate Projects Section
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');

    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.style.setProperty('--project-color', project.color);
        projectCard.style.setProperty('--project-glow', `${project.color}50`);
        projectCard.style.setProperty('--project-gradient', `linear-gradient(135deg, ${project.color} 0%, ${project.color}80 100%)`);

        const techTags = project.technologies.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        const projectLink = project.link
            ? `<a href="${project.link}" target="_blank" class="project-link">
                View Project <i class="fas fa-arrow-right"></i>
               </a>`
            : '';

        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-icon">${project.icon}</div>
                <span class="project-date">${project.startDate} - ${project.endDate}</span>
            </div>
            <h3>${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
            ${projectLink}
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Update Personal Information
function updatePersonalInfo() {
    // Update name in navbar
    const navLogo = document.querySelector('.nav-logo .gradient-text');
    if (navLogo) {
        navLogo.textContent = `<${portfolioData.name.split(' ')[0]}/>`;
    }

    // Update hero section
    const typingName = document.getElementById('typing-name');
    if (typingName) {
        typingName.textContent = portfolioData.name;
    }

    // Update about section info
    const infoItems = document.querySelectorAll('.info-item span');
    if (infoItems.length >= 3) {
        infoItems[0].textContent = portfolioData.location;
        infoItems[1].textContent = `${portfolioData.yearsExperience} Years Experience`;
        infoItems[2].textContent = portfolioData.email;
    }

    // Update contact section
    const contactValues = document.querySelectorAll('.contact-value');
    if (contactValues.length >= 2) {
        contactValues[0].textContent = portfolioData.email;
        contactValues[0].setAttribute('data-copy', portfolioData.email);
        contactValues[1].textContent = portfolioData.location;
        contactValues[2].textContent = portfolioData.phone;
        contactValues[2].setAttribute('data-copy', portfolioData.phone);
    }

    // Update copy buttons
    const copyButtons = document.querySelectorAll('.copy-btn');
    if (copyButtons.length >= 2) {
        copyButtons[0].setAttribute('onclick', `copyToClipboard('${portfolioData.email}', this)`);
        copyButtons[1].setAttribute('onclick', `copyToClipboard('${portfolioData.phone}', this)`);
    }

    // Update social links
    const socialLinks = document.querySelectorAll('.social-icon');
    socialLinks.forEach(link => {
        const icon = link.querySelector('i');
        if (icon) {
            if (icon.classList.contains('fa-github')) {
                link.href = portfolioData.social.github;
            } else if (icon.classList.contains('fa-linkedin')) {
                link.href = portfolioData.social.linkedin;
            } else if (icon.classList.contains('fa-whatsapp')) {
                link.href = portfolioData.social.whatsapp;
            } else if (icon.classList.contains('fa-envelope')) {
                link.href = `mailto:${portfolioData.email}`;
            } else if (icon.classList.contains('fa-twitter')) {
                link.href = portfolioData.social.twitter;
            }
        }
    });

    // Update footer year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Update page title
    document.title = `${portfolioData.name} - Portfolio`;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = `Portfolio of ${portfolioData.name} - ${portfolioData.title}`;
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.content = `${portfolioData.name} - Portfolio`;
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.content = `${portfolioData.title} Portfolio`;
    }
}

// Initialize all content
function initContent() {
    updatePersonalInfo();
    populateSkills();
    populateExperience();
    populateProjects();
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContent);
} else {
    initContent();
}
