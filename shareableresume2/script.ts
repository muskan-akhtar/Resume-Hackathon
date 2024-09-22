declare const html2pdf: any;
document.addEventListener('DOMContentLoaded', () => {
    const sectionSelect = document.getElementById('section-select') as HTMLSelectElement;
    const resumeSections = document.querySelectorAll('.resume-section') as NodeListOf<HTMLElement>;
    const generateButton = document.getElementById('generate-button') as HTMLButtonElement;
    const downloadButton = document.getElementById('download-pdf-button') as HTMLButtonElement; // Added download button
    const outputDiv = document.getElementById('output') as HTMLDivElement;
    const profileImageInput = document.getElementById('profile-image') as HTMLInputElement;

    sectionSelect.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLSelectElement;
        const selectedSection = target.value;
        resumeSections.forEach(section => {
            section.classList.remove('active');
        });
        const sectionToShow = document.getElementById(selectedSection);
        if (sectionToShow) {
            sectionToShow.classList.add('active');
        }
    });

    generateButton.addEventListener('click', () => {
        let resumeOutput = '';
        const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
        const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
        const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
        const educationType = (document.getElementById('education-type') as HTMLInputElement)?.value || '';
        const degree = (document.getElementById('degree') as HTMLInputElement)?.value || '';
        const institution = (document.getElementById('university') as HTMLInputElement)?.value || '';
        const year = (document.getElementById('year') as HTMLInputElement)?.value || '';
        const jobTitle = (document.getElementById('job-title') as HTMLInputElement)?.value || '';
        const company = (document.getElementById('company') as HTMLInputElement)?.value || '';
        const years = (document.getElementById('years') as HTMLInputElement)?.value || '';
        const skillsList = (document.getElementById('skills-list') as HTMLInputElement)?.value || '';

        // Handle image
        if (profileImageInput.files && profileImageInput.files.length > 0) {
            const imageFile = profileImageInput.files[0];
            const imageURL = URL.createObjectURL(imageFile);
            resumeOutput += `<h2>Profile Image</h2>
                <img src="${imageURL}" alt="Profile Image">`;
        }

        // Handle personal information
        if (name || email || phone) {
            resumeOutput += `<h2>Personal Information</h2>
                <p>Name:<span contenteditable="true">${name || 'N/A'}</span></p>
                <p>Email:<span contenteditable="true">${email || 'N/A'}</span></p>
                <p>Phone:<span contenteditable="true">${phone || 'N/A'}</span></p>`;
        }

        // Handle education
        if (educationType || degree || institution || year) {
            resumeOutput += `<h2>Education</h2>
                <p>Type:<span contenteditable="true">${educationType || 'N/A'}</span></p>
                <p>Degree:<span contenteditable="true">${degree || 'N/A'}</span></p>
                <p>Institution:<span contenteditable="true">${institution || 'N/A'}</span></p>
                <p>Year: ${year || 'N/A'}</p>`;
        }

        // Handle experience
        if (jobTitle || company || years) {
            resumeOutput += `<h2>Experience</h2>
                <p>Job Title:<span contenteditable="true">${jobTitle || 'N/A'}</span></p>
                <p>Company:<span contenteditable="true">${company || 'N/A'}</span></p>
                <p>Years:<span contenteditable="true">${years || 'N/A'}</span></p>`;
        }

        // Handle skills
        if (skillsList) {
            resumeOutput += `<h2>Skills</h2>
                <p><span contenteditable="true">${skillsList.split(',').map(skill => skill.trim()).join(', ') || 'N/A'}</span></p>`;
        }

        outputDiv.innerHTML = resumeOutput || '<p>No data available to generate resume.</p>';
    });

    
    downloadButton.addEventListener('click', () => {
        const element = document.getElementById('resume-output'); // Select the div you want to convert to PDF
        if (element) {
            html2pdf()
                .from(element)
                .save('resume.pdf'); // Set the filename for the downloaded PDF
        }
    });
    sectionSelect.dispatchEvent(new Event('change'));
});
