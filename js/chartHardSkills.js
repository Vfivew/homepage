document.addEventListener('DOMContentLoaded', function () {
    var hardSkillsBlock = document.querySelector('.hard__skills');
    var tooltip = document.querySelector('.hard__skills__tooltip');
    var ctx = document.getElementById('hardSkillsChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['React', 'Redux', 'ReactRouter', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'RTK Query', 'Webpack', 'MongoDB', 'Node.js'],
            datasets: [{
                label: 'Skills Level',
                data: [9, 8, 8, 8, 7, 9, 9, 8, 7, 7, 7, 6], 
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

    hardSkillsBlock.addEventListener('mouseover', function () {
        tooltip.classList.add('active');
        tooltip.style.top = hardSkillsBlock.offsetTop + hardSkillsBlock.offsetHeight + 'px';
    });

    hardSkillsBlock.addEventListener('mouseout', function () {
        tooltip.classList.remove('active');
    });
});
