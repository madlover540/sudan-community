window.onload = function() {
    document.body.classList.remove('is-preload');

    function waveAnimation() {
        var wave = document.getElementById('wave');
        if (wave) {
            var waveLength = 1000; // length of one wave
            var speed = 2; // speed of the animation
            var pos = 1000; // initial position of the wave
            setInterval(function() {
                pos -= speed;
                pos = pos % waveLength;
                wave.style.backgroundPosition = pos + 'px';
            }, 20);
        }
    }

    waveAnimation();

    window.ontouchmove = function() { return false; }
    window.onorientationchange = function() { document.body.scrollTop = 0; }
}
