document.addEventListener('DOMContentLoaded', function () {
    var sectionSelect = document.getElementById('section-select');
    var resumeSections = document.querySelectorAll('.resume-section');
    var generateButton = document.getElementById('generate-button');
    var outputDiv = document.getElementById('output');
    var profileImageInput = document.getElementById('profile-image');
    sectionSelect.addEventListener('change', function (e) {
        var target = e.target;
        var selectedSection = target.value;
        resumeSections.forEach(function (section) {
            section.classList.remove('active');
        });
        var sectionToShow = document.getElementById(selectedSection);
        if (sectionToShow) {
            sectionToShow.classList.add('active');
        }
    });
    generateButton.addEventListener('click', function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var resumeOutput = '';
        var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
        var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
        var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || '';
        var educationType = ((_d = document.getElementById('education-type')) === null || _d === void 0 ? void 0 : _d.value) || '';
        var degree = ((_e = document.getElementById('degree')) === null || _e === void 0 ? void 0 : _e.value) || '';
        var institution = ((_f = document.getElementById('university')) === null || _f === void 0 ? void 0 : _f.value) || '';
        var year = ((_g = document.getElementById('year')) === null || _g === void 0 ? void 0 : _g.value) || '';
        var jobTitle = ((_h = document.getElementById('job-title')) === null || _h === void 0 ? void 0 : _h.value) || '';
        var company = ((_j = document.getElementById('company')) === null || _j === void 0 ? void 0 : _j.value) || '';
        var years = ((_k = document.getElementById('years')) === null || _k === void 0 ? void 0 : _k.value) || '';
        var skillsList = ((_l = document.getElementById('skills-list')) === null || _l === void 0 ? void 0 : _l.value) || '';
        // Handle image
        if (profileImageInput.files && profileImageInput.files.length > 0) {
            var imageFile = profileImageInput.files[0];
            var imageURL = URL.createObjectURL(imageFile);
            resumeOutput += "<h2>Profile Image</h2>\n                <img src=\"".concat(imageURL, "\" alt=\"Profile Image\">");
        }
        // Handle personal information
        if (name || email || phone) {
            resumeOutput += "<h2>Personal Information</h2>\n                <p>Name:<span contenteditable=\"true\">".concat(name || 'N/A', "</span></p>\n                <p>Email:<span contenteditable=\"true\">").concat(email || 'N/A', "</span></p>\n                <p>Phone:<span contenteditable=\"true\">").concat(phone || 'N/A', "</span></p>");
        }
        // Handle education
        if (educationType || degree || institution || year) {
            resumeOutput += "<h2>Education</h2>\n                <p>Type:<span contenteditable=\"true\">".concat(educationType || 'N/A', "</span></p>\n                <p>Degree:<span contenteditable=\"true\">").concat(degree || 'N/A', "</span></p>\n                <p>Institution:<span contenteditable=\"true\">").concat(institution || 'N/A', "</span></p>\n                <p>Year: ").concat(year || 'N/A', "</p>");
        }
        // Handle experience
        if (jobTitle || company || years) {
            resumeOutput += "<h2>Experience</h2>\n                <p>Job Title:<span contenteditable=\"true\">".concat(jobTitle || 'N/A', "</span></p>\n                <p>Company:<span contenteditable=\"true\">").concat(company || 'N/A', "</span></p>\n                <p>Years:<span contenteditable=\"true\">").concat(years || 'N/A', "</span></p>");
        }
        // Handle skills
        if (skillsList) {
            resumeOutput += "<h2>Skills</h2>\n                <p><span contenteditable=\"true\">".concat(skillsList.split(',').map(function (skill) { return skill.trim(); }).join(', ') || 'N/A', "</span></p>");
        }
        outputDiv.innerHTML = resumeOutput || '<p>No data available to generate resume.</p>';
    });
    sectionSelect.dispatchEvent(new Event('change'));
});
