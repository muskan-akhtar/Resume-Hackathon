document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const resumeOutput = document.getElementById('resume-output');

    toggleButton.addEventListener('click', () => {
        if (resumeOutput.style.display === 'none') {
            resumeOutput.style.display = 'block';
            toggleButton.textContent = 'Hide Resume';
        } else {
            resumeOutput.style.display = 'none';
            toggleButton.textContent = 'Show Resume';
        }
    });
});