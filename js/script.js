var start = null;

elem.onclick = function () {

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        doctor.style.transform = 'translateY(' + Math.min(progress / 10, 200) + 'px)';

        if (progress < 2000) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}