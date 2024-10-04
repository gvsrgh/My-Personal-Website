window.onload = function() {
    const backgroundImage = document.querySelector('.background-image');
    const content = document.querySelector('.content');

    backgroundImage.style.transform = 'translateX(-200%)';
    content.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        backgroundImage.style.transition = 'transform 1.5s ease';
        backgroundImage.style.transform = 'translateX(0)';

        content.style.transition = 'transform 1.5s ease';
        content.style.transform = 'translateX(0)';
    }, 100);
};
