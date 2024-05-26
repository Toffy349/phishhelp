document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step input[type="checkbox"]');

    steps.forEach(step => {
        step.addEventListener('change', () => {
            if (step.checked) {
                step.nextElementSibling.classList.add('active');
            } else {
                step.nextElementSibling.classList.remove('active');
            }
        });
    });
});
