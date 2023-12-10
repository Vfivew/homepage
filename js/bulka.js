document.addEventListener('DOMContentLoaded', function () {
    let animatedImg = document.getElementById('animatedImg');
    let intervalId; 
    
    function changeVisibilityAndPosition() {
        var isVisible = animatedImg.classList.contains('visible');

        if (!isVisible) {
            var randomTop = Math.floor(Math.random() * 12) * 5;
            var randomLeft = Math.floor(Math.random() * 6) * 15; 
            animatedImg.style.top = randomTop + '%';
            animatedImg.style.left = randomLeft + '%';
        }

        if (isVisible) {
            animatedImg.classList.remove('visible');
            animatedImg.classList.add('hidden');
        } else {
            animatedImg.classList.remove('hidden');
            animatedImg.classList.add('visible');
        }
    }

    intervalId = setInterval(changeVisibilityAndPosition, 5000);

    let link = document.querySelector('a[target="_blank"]');
    link.addEventListener('click', function () {
        clearInterval(intervalId);

        animatedImg.style.display = 'none';
    });
});
