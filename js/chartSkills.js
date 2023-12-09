document.addEventListener('DOMContentLoaded', function () {
    var skillsBlock = document.querySelector('.skills');
    var tooltip = document.querySelector('.skills__tooltip');
    var ctx = document.getElementById('skillsChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Punctuality', 'Organization', 'Quick Learning', 'Problem Solving', 'Receivin feedback', 'Chocolate Devourer'],
            datasets: [{
                label: 'Skills Level',
                data: [9, 7, 8, 7, 9, 10],
                backgroundColor: 'rgba(255, 154, 0, 0.2)',
                borderColor: 'rgba(255, 154, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });

    skillsBlock.addEventListener('mouseover', function () {
        tooltip.classList.add('active');
        tooltip.style.top = skillsBlock.offsetTop + skillsBlock.offsetHeight + 'px';
    });

    skillsBlock.addEventListener('mouseout', function () {
        tooltip.classList.remove('active');
    });
});
