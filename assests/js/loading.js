(function() {
    var fill, overlay, main;

    function setProgress(val) {
        if (fill) fill.style.width = Math.min(val, 100) + '%';
    }

    document.addEventListener('DOMContentLoaded', function() {
        fill = document.querySelector('.progress-bar-fill');
        overlay = document.getElementById('loading');
        main = document.getElementById('main');

        setProgress(30);

        var imgs = document.querySelectorAll('#loading img');
        var total = imgs.length;
        var loaded = 0;

        function onImgLoad() {
            loaded++;
            setProgress(30 + (loaded / total) * 50);
        }

        for (var i = 0; i < total; i++) {
            if (imgs[i].complete) {
                onImgLoad();
            } else {
                imgs[i].addEventListener('load', onImgLoad);
                imgs[i].addEventListener('error', onImgLoad);
            }
        }
    });

    window.addEventListener('load', function() {
        setProgress(100);
        setTimeout(function() {
            if (overlay) overlay.classList.add('fade-out');
            if (main) main.classList.add('show');
        }, 400);
    });
})();
