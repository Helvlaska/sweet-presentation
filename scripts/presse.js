var pressCards = document.getElementById('pressCards');
var pressDots = document.querySelectorAll('.press__dot');
var pressItems = document.querySelectorAll('.press__card');

pressDots.forEach(function(dot) {
    dot.addEventListener('click', function() {
        var index = parseInt(dot.getAttribute('data-index'));
        pressItems[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    });
});

pressCards.addEventListener('scroll', function() {
    var index = Math.round(pressCards.scrollLeft / pressCards.offsetWidth);
    pressDots.forEach(function(dot) {
        dot.classList.remove('press__dot--active');
    });
    pressDots[index].classList.add('press__dot--active');
});
