(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mark <html> immediately — CSS uses this to apply pre-reveal opacity:0 states.
  // Done before React renders so there is no flash of un-hidden content.
  if (!prefersReduced) {
    document.documentElement.classList.add('js-motion');
  }

  // ── PARALLAX ─────────────────────────────────────────────────────────────
  function tickParallax() {
    var sy = window.scrollY || window.pageYOffset;
    var els = document.querySelectorAll('[data-parallax]');
    for (var i = 0; i < els.length; i++) {
      var speed = parseFloat(els[i].dataset.parallax) || 0.15;
      els[i].style.transform = 'translateY(' + (sy * speed).toFixed(2) + 'px)';
    }
  }

  if (!prefersReduced) {
    window.addEventListener('scroll', tickParallax, { passive: true });
  }

  // ── SCROLL REVEAL ─────────────────────────────────────────────────────────
  var observer = null;

  function setupReveal() {
    if (observer) observer.disconnect();

    var targets = document.querySelectorAll('[data-reveal]:not(.is-revealed)');
    if (!targets.length) return;

    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = el.dataset.revealDelay;
        if (delay && delay !== '0') {
          el.style.transitionDelay = delay + 'ms';
        }
        el.classList.add('is-revealed');
        observer.unobserve(el);
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -48px 0px',
    });

    targets.forEach(function (el) { observer.observe(el); });
  }

  // Public — React calls this after every page navigation to re-scan new DOM
  window.initMotion = function () {
    if (prefersReduced) return;
    // Two rAF frames to guarantee React has committed its latest render to the DOM
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setupReveal();
        tickParallax();
      });
    });
  };
})();
