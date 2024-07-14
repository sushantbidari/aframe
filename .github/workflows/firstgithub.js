
document.addEventListener("DOMContentLoaded", function() {
    const man = document.querySelector('.man');
    
    man.addEventListener('mouseover', () => {
        man.style.animationPlayState = 'paused';
    });

    man.addEventListener('mouseout', () => {
        man.style.animationPlayState = 'running';
    });
});
