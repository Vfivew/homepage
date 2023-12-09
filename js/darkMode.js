document.addEventListener('DOMContentLoaded', function () {
    var themeSwitchBtn = document.querySelector('.theme-switch-btn');
    var body = document.body;

    themeSwitchBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeSwitchBtn.textContent = 'Light Mode';
        } else {
            themeSwitchBtn.textContent = 'Dark Mode';
        }
    });
});
