var track = document.getElementById('nextTrack');
var dots = document.querySelectorAll('.next__dot');
var cards = document.querySelectorAll('.next__card');

// Scroll vers la card au clic sur un dot
dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
        var index = parseInt(dot.getAttribute('data-index'));
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
});

// Mettre à jour le dot actif au scroll
track.addEventListener('scroll', function() {
    var center = track.scrollLeft + track.offsetWidth / 2;
    var activeIndex = 0;
    var minDist = Infinity;

    cards.forEach(function(card, index) {
        var cardCenter = card.offsetLeft + card.offsetWidth / 2;
        var dist = Math.abs(center - cardCenter);
        if (dist < minDist) {
            minDist = dist;
            activeIndex = index;
        }
    });

    dots.forEach(function(dot) {
        dot.classList.remove('next__dot--active');
    });
    dots[activeIndex].classList.add('next__dot--active');
});
