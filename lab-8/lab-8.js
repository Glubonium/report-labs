document.addEventListener('DOMContentLoaded', () => {
    const subsectionToggles = document.querySelectorAll('.subsection-toggle');

    subsectionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const subsectionId = toggle.getAttribute('data-subsection');
            const subsection = document.getElementById(subsectionId);
            subsection.classList.toggle('hidden');
        });
    });
});
