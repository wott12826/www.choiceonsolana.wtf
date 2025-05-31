document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('storyModal');
    const area6 = document.getElementById('area6');
    const closeBtn = document.querySelector('.modal-close');

    // Open modal when clicking on area6 (Generate $CHOICE)
    area6.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });

    // Close modal when clicking on close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}); 