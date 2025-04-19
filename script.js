document.querySelectorAll('.question').forEach((question, index) => {
    let answer = question.nextElementSibling;
    let btn = question.querySelector('.btn');

    question.addEventListener('click', () => {
        let isActive = answer.classList.toggle('active');
        btn.textContent = isActive ? '-' : '+';

        if (isActive) {
            question.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});